type SearchSuggestionsProps = {
   suggestions: string[];
   onSuggestionClick: (suggestion: string) => void;
};

export function SearchSuggestions({
   suggestions,
   onSuggestionClick,
}: SearchSuggestionsProps) {
   if (suggestions.length === 0) return null;

   return (
      <div className="bg-accent divide-background absolute mt-2 w-full divide-y overflow-hidden rounded">
         {suggestions.map((suggestion, index) => (
            <button
               key={index}
               className="text-foreground hover:bg-card w-full px-4 py-3 text-left transition-colors duration-300"
               onClick={() => onSuggestionClick(suggestion)}
            >
               {suggestion}
            </button>
         ))}
      </div>
   );
}
