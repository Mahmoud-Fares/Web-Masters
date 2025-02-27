import axios from 'axios';

import {
   ForecastDay,
   WeatherCondition,
   WeatherData,
   WeatherResponse,
} from '@/types/weather-types';

const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function mapWeatherCondition(condition: string): WeatherCondition {
   switch (condition.toLowerCase()) {
      case 'thunderstorm':
         return 'Storm';
      case 'drizzle':
      case 'rain':
         return 'Rain';
      case 'clouds':
         return 'Cloudy';
      case 'clear':
         return 'Sunny';
      default:
         return 'Partly cloudy';
   }
}

function transformWeatherData(response: WeatherResponse): WeatherData {
   const current = response.list[0];
   const forecast: ForecastDay[] = response.list
      .filter((_item, index) => index % 8 === 0) // Get one reading per day (every 24 hours)
      .map((item) => ({
         day: new Date(item.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
         }),
         temp: Math.round(item.main.temp),
         minTemp: Math.round(item.main.temp_min),
         maxTemp: Math.round(item.main.temp_max),
         condition: mapWeatherCondition(item.weather[0].main),
      }));

   return {
      city: response.city.name,
      state: response.city.country,
      currentTemp: Math.round(current.main.temp),
      minTemp: Math.round(current.main.temp_min),
      maxTemp: Math.round(current.main.temp_max),
      humidity: current.main.humidity,
      windSpeed: current.wind.speed,
      condition: mapWeatherCondition(current.weather[0].main),
      thermalSensation: Math.round(current.main.feels_like),
      rainProbability: current.clouds.all, // Using cloud coverage as a proxy for rain probability
      uvIndex: 5, // OpenWeather API doesn't provide UV index in the free tier
      forecast,
   };
}

export async function getWeatherForCity(city: string): Promise<WeatherData> {
   if (!WEATHER_API_KEY) {
      throw new Error('Weather API key is not configured');
   }

   try {
      const { data } = await axios.get<WeatherResponse>(
         `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}&units=metric`
      );

      return transformWeatherData(data);
   } catch (error) {
      if (axios.isAxiosError(error)) {
         throw new Error(
            error.response?.data?.message || 'Failed to fetch weather data'
         );
      }
      throw error;
   }
}
