import { useState } from 'react';

import { cn } from '@/lib/utils';

export default function Pagination() {
   const [currentPage, setCurrentPage] = useState<number>(3);
   return (
      <div className="mt-8 flex items-center justify-center gap-2">
         {[1, 2, 3, 4, 5].map((_, index) => (
            <div
               onClick={() => {
                  setCurrentPage(index + 1);
               }}
               key={index}
               className={cn(
                  'size-2 rounded-full transition-colors duration-200',
                  currentPage === index + 1
                     ? 'bg-primary'
                     : 'bg-muted-foreground/50'
               )}
            />
         ))}
      </div>
   );
}
