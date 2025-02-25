import { ForecastDay } from '@/types/weather-types';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { WeatherIcon } from './weather-icon';

type WeatherForecastProps = {
   forecast: ForecastDay[];
};

export function WeatherForecast({ forecast }: WeatherForecastProps) {
   return (
      <Card className="rounded border-0 pb-4 text-sm">
         <CardHeader className="text-muted">
            <CardTitle>5-day forecast</CardTitle>
         </CardHeader>

         <CardContent className="grid grid-cols-3 gap-4 gap-y-6 text-center md:grid-cols-5">
            {forecast.map((day, index) => (
               <div key={index} className="grid grid-cols-subgrid gap-4">
                  <div className="text-sm font-medium">{day.day}</div>

                  <WeatherIcon
                     condition={day.condition}
                     className="text-primary mx-auto h-6 w-6"
                  />

                  <div className="font-medium">{day.condition}</div>

                  <div className="text-foreground font-medium">
                     {day.temp}°C{' '}
                     <span className="text-card-foreground pl-1 text-xs">
                        {day.minTemp}°C
                     </span>
                  </div>
               </div>
            ))}
         </CardContent>
      </Card>
   );
}
