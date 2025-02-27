import { useQuery } from '@tanstack/react-query';

import { getWeatherForCity } from '@/lib/weather-service';

export function useWeather(city: string) {
   return useQuery({
      queryKey: ['weather', city],
      queryFn: () => {
         if (city) return getWeatherForCity(city);
      },
      enabled: !!city,
      staleTime: 1000 * 60 * 5, // Consider data stale after 5 minutes
      gcTime: 1000 * 60 * 10, // Keep unused data in cache for 10 minutes
   });
}
