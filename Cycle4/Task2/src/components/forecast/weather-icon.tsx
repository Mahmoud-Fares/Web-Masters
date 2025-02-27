import { Cloud, CloudLightning, CloudRain, CloudSun, Sun } from 'lucide-react';

import { WeatherCondition } from '@/types/weather-types';

type WeatherIconProps = {
   condition: WeatherCondition;
   className?: string;
};

// todo better icons
export function WeatherIcon({ condition, className }: WeatherIconProps) {
   switch (condition) {
      case 'Storm':
         return <CloudLightning className={className} />;
      case 'Rain':
         return <CloudRain className={className} />;
      case 'Partly cloudy':
         return <CloudSun className={className} />;
      case 'Cloudy':
         return <Cloud className={className} />;
      case 'Sunny':
         return <Sun className={className} />;
   }
}
