import { CloudRain, Droplets, Sun, Thermometer, Wind } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WeatherData } from '@/types/weather-types';

import { WeatherDetailsItem } from './weather-details-item';

type WeatherDetailsProps = {
   weather: WeatherData;
};

export function WeatherDetails({ weather }: WeatherDetailsProps) {
   const details = [
      {
         icon: <Thermometer />,
         label: 'Thermal sensation',
         value: `${weather.thermalSensation}°C`,
      },
      {
         icon: <CloudRain />,
         label: 'Rain probability',
         value: `${weather.rainProbability}%`,
      },
      {
         icon: <Wind />,
         label: 'Wind speed',
         value: `${weather.windSpeed} km/h`,
      },
      {
         icon: <Droplets />,
         label: 'Air humidity',
         value: `${weather.humidity}%`,
      },
      {
         icon: <Sun />,
         label: 'UV Index',
         value: weather.uvIndex.toString(),
      },
   ];

   return (
      <Card className="rounded border-0 pb-4 text-sm">
         <CardHeader className="text-muted">
            <CardTitle>Weather details</CardTitle>
         </CardHeader>

         <CardContent className="divide-y">
            {details.map((detail, index) => (
               <WeatherDetailsItem key={index} {...detail} />
            ))}
         </CardContent>
      </Card>
   );
}
