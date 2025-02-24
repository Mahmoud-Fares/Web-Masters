import { Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WeatherData } from "@/types/weather-types";
import { DateTime } from "@/hooks/use-date-time";

interface CurrentWeatherProps {
   weather: WeatherData;
   dateTime: DateTime;
}

export function CurrentWeather({ weather, dateTime }: CurrentWeatherProps) {
   return (
      <Card className="bg-card border-0 p-8 flex flex-col justify-between h-full">
         <div className="flex justify-between items-start">
            <div>
               <h1 className="text-2xl font-bold">
                  {weather.city}, {weather.state}
               </h1>
               <p className="text-muted">{dateTime.currentDate}</p>
            </div>
            <div className="text-xl">{dateTime.currentTime}</div>
         </div>

         <div className="flex items-end justify-between mt-auto">
            <div>
               <div className="text-7xl font-bold mb-2">
                  {weather.currentTemp}°C
               </div>
               <div className="text-muted">
                  {weather.minTemp}°C / {weather.maxTemp}°C •{" "}
                  {weather.condition}
               </div>
            </div>
            <div className="text-accent">
               <Cloud className="w-24 h-24" />
            </div>
         </div>
      </Card>
   );
}
