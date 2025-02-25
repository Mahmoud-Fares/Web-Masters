export type WeatherCondition =
   | 'Storm'
   | 'Rain'
   | 'Partly cloudy'
   | 'Cloudy'
   | 'Sunny';

export type ForecastDay = {
   day: string;
   temp: number;
   minTemp: number;
   condition: WeatherCondition;
};

export type WeatherData = {
   city: string;
   state: string;
   currentTemp: number;
   minTemp: number;
   maxTemp: number;
   condition: WeatherCondition;
   thermalSensation: number;
   rainProbability: number;
   windSpeed: number;
   humidity: number;
   uvIndex: number;
   forecast: ForecastDay[];
};
