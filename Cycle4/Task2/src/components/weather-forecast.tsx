import { Cloud, CloudRain, Sun } from "lucide-react";
import { WeatherCondition, ForecastDay } from "@/types/weather-types";

interface WeatherIconProps {
   condition: WeatherCondition;
}

function WeatherIcon({ condition }: WeatherIconProps) {
   switch (condition) {
      case "Storm":
      case "Rain":
         return <CloudRain className="w-6 h-6 mx-auto text-accent" />;
      case "Partly cloudy":
      case "Cloudy":
         return <Cloud className="w-6 h-6 mx-auto text-accent" />;
      case "Sunny":
         return <Sun className="w-6 h-6 mx-auto text-accent" />;
   }
}

interface WeatherForecastProps {
   forecast: ForecastDay[];
}

export function WeatherForecast({ forecast }: WeatherForecastProps) {
   return (
      <div>
         <h2 className="text-xl font-semibold mb-4">5-day forecast</h2>
         <div className="grid grid-cols-5 gap-2 text-center">
            {forecast.map((day, index) => (
               <div key={index} className="space-y-2">
                  <div className="text-sm text-muted">{day.day}</div>
                  <WeatherIcon condition={day.condition} />
                  <div className="font-semibold">{day.temp}°C</div>
                  <div className="text-sm text-muted">{day.minTemp}°C</div>
               </div>
            ))}
         </div>
      </div>
   );
}
