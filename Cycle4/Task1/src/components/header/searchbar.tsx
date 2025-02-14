import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SearchBar() {
   return (
      <div className="flex max-w-xs flex-1 items-center gap-1 rounded-md bg-input px-4 py-2">
         <Input
            type="text"
            placeholder="What are you looking for ?"
            className="border-none shadow-none outline-transparent"
         />

         <Button variant="ghost" size="icon">
            <Search className="text-gray-500" />
         </Button>
      </div>
   );
}
