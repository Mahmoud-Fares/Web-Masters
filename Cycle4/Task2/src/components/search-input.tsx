import { useState } from 'react';

import { SearchField } from './search/search-field';
import { SearchSuggestions } from './search/search-suggestions';

type SearchInputProps = {
   onSearch: (location: string) => void;
};

export function SearchInput({ onSearch }: SearchInputProps) {
   const [search, setSearch] = useState('');
   const [suggestions, setSuggestions] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   const handleSearch = async (value: string) => {
      setSearch(value);

      if (value.length < 2) {
         setSuggestions([]);
         return;
      }

      setIsLoading(true);

      try {
         // Simulate API delay
         await new Promise((resolve) => setTimeout(resolve, 500));

         if (value.toLowerCase().includes('porto')) {
            setSuggestions([
               'Porto Alegre, RS - Brazil',
               'Porto Seguro, BA - Brazil',
               'Porto - Portugal',
            ]);
         } else {
            setSuggestions([]);
         }
      } finally {
         setIsLoading(false);
      }
   };

   const handleSuggestionClick = (suggestion: string) => {
      setSearch(suggestion);
      setSuggestions([]);
      onSearch(suggestion);
   };

   return (
      <div className="relative w-full">
         <SearchField
            value={search}
            isLoading={isLoading}
            onChange={handleSearch}
         />
         <SearchSuggestions
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
         />
      </div>
   );
}
