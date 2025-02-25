import { Input } from '@/components/ui/input';

import { Logo } from './logo';

type WeatherHeaderProps = {
   onSearch: (location: string) => void;
};

export function WeatherHeader({ onSearch }: WeatherHeaderProps) {
   return (
      <div className="flex items-center gap-2">
         <Logo />

         <Input
            type="search"
            placeholder="Search location..."
            className="bg-accent placeholder:text-accent-foreground text-foreground border-0"
            onChange={(e) => onSearch(e.target.value)}
         />
      </div>
   );
}
