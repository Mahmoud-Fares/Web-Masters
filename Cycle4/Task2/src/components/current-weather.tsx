import { Cloud } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { DateTime } from '@/hooks/use-date-time';
import { WeatherData } from '@/types/weather-types';

type CurrentWeatherProps = {
   weather: WeatherData;
   dateTime: DateTime;
};

export function CurrentWeather({ weather, dateTime }: CurrentWeatherProps) {
   return (
      <Card className="bg-card text-foreground relative flex h-full flex-col justify-between overflow-hidden rounded border-0 p-8">
         <div
            className="absolute inset-0 z-0 rounded bg-cover bg-center"
            style={{
               backgroundImage: 'url("/weather-result-background.png")',
            }}
         />
         <div className="absolute inset-0 z-10" />
         <div className="relative z-20 flex h-full min-h-[400px] flex-col justify-between">
            <div className="flex items-start justify-between">
               <div>
                  <h1 className="text-2xl font-bold">
                     {weather.city}, {weather.state}
                  </h1>
                  <p className="text-card-foreground">{dateTime.currentDate}</p>
               </div>
               <div className="text-xl">{dateTime.currentTime}</div>
            </div>

            <div className="mt-auto flex items-end justify-between">
               <div>
                  <div className="mb-2 text-7xl font-bold">
                     {weather.currentTemp}°<span className="text-5xl">C</span>
                  </div>

                  <div className="flex items-center gap-1 font-semibold text-white/80">
                     <div>
                        {weather.minTemp}°<span className="text-xs">C</span> /{' '}
                        {weather.maxTemp}°<span className="text-xs">C</span>
                     </div>

                     <span className="text-muted px-1 text-2xl">•</span>

                     {weather.condition}
                  </div>
               </div>

               <div className="text-primary">
                  <Cloud className="h-24 w-24" />
               </div>
            </div>
         </div>
      </Card>
   );
}
