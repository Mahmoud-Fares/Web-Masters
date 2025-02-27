import { Logo } from './logo';
import { SearchInput } from './search-input';

export function WeatherHeader() {
   return (
      <div className="flex items-center gap-2">
         <Logo className="bg-accent aspect-square size-10 p-2" />

         <SearchInput />
      </div>
   );
}
