import { Input } from '@/components/ui/input';

import { Logo } from './logo';

type WeatherHeaderProps = {
   onSearch: (location: string) => void;
};

export function WeatherHeader({ onSearch }: WeatherHeaderProps) {
   return (
      <div className="flex items-center gap-2">
         <Logo className="bg-accent aspect-square size-10 p-2" />

         <Input
            type="search"
            placeholder="Search location..."
            className="search-input h-10"
            onChange={(e) => onSearch(e.target.value)}
         />
      </div>
   );
}
