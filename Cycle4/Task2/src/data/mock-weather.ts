import { WeatherData } from '@/types/weather-types';

export const weatherData: WeatherData = {
   city: 'Porto Alegre',
   state: 'RS',
   currentTemp: 28,
   minTemp: 26,
   maxTemp: 32,
   condition: 'Partly cloudy',
   thermalSensation: 26,
   rainProbability: 0,
   windSpeed: 8,
   humidity: 40,
   uvIndex: 5,
   forecast: [
      { day: 'Tomorrow', temp: 32, minTemp: 26, condition: 'Storm' },
      { day: 'Wednesday', temp: 32, minTemp: 26, condition: 'Rain' },
      { day: 'Thursday', temp: 32, minTemp: 26, condition: 'Partly cloudy' },
      { day: 'Friday', temp: 32, minTemp: 26, condition: 'Cloudy' },
      { day: 'Saturday', temp: 32, minTemp: 26, condition: 'Sunny' },
   ],
};
