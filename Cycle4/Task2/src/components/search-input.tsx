import { useState } from 'react';

import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useDebounce } from 'use-debounce';

import { Input } from '@/components/ui/input';
import { useWeather } from '@/hooks/use-weather';

export function SearchInput() {
   const [search, setSearch] = useState('');
   const navigate = useNavigate();
   const [value] = useDebounce(search, 1000);
   const { data, isError, error, isLoading } = useWeather(value.trim());

   // navigate on successful data fetch
   if (data && search) {
      toast.dismiss('weather-loading');
      toast.success(`Weather data loaded for ${search}`);
      navigate(`/result?city=${encodeURIComponent(search.trim())}`);
      setSearch(''); // Reset after navigation
   }

   // error toast
   if (isError && error && search) {
      toast.dismiss('weather-loading');
      toast.error(
         error instanceof Error && error.message.includes('not found')
            ? `Could not find weather data for "${search}". Please check the city name.`
            : 'Failed to load weather data. Please try again.'
      );
      setSearch('');
   }

   // loading toast
   if (isLoading && search) {
      toast.loading('Fetching weather data...', { id: 'weather-loading' });
   }

   return (
      <div className="relative w-full">
         <Input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search location"
            className="search-input h-12"
         />

         {isLoading && (
            <div className="bg-accent absolute top-1/2 right-3 -translate-y-1/2">
               <Loader className="h-4 w-4 animate-spin duration-2500" />
            </div>
         )}
      </div>
   );
}
