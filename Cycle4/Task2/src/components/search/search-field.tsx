import { Loader } from 'lucide-react';

import { Input } from '../ui/input';

type SearchFieldProps = {
   value: string;
   isLoading: boolean;
   onChange: (value: string) => void;
};

export function SearchField({ value, isLoading, onChange }: SearchFieldProps) {
   return (
      <div className="relative">
         <Input
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
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
