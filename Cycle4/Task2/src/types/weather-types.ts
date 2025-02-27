export type WeatherResponse = {
   list: Array<{
      dt: number;
      main: {
         temp: number;
         feels_like: number;
         temp_min: number;
         temp_max: number;
         pressure: number;
         humidity: number;
      };
      weather: Array<{
         id: number;
         main: string;
         description: string;
         icon: string;
      }>;
      wind: {
         speed: number;
         deg: number;
      };
      clouds: {
         all: number;
      };
      dt_txt: string;
   }>;
   city: {
      id: number;
      name: string;
      coord: {
         lat: number;
         lon: number;
      };
      country: string;
      timezone: number;
   };
};

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
