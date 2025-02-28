import { useState } from 'react';

import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CategoryItemType } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type MobileCategoryItemProps = {
   category: CategoryItemType;
};

export function MobileCategoryItem({ category }: MobileCategoryItemProps) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div>
         <div className="flex w-full items-center">
            <Link
               to={category.href}
               className="flex flex-1 items-center px-6 py-4 transition-colors hover:bg-muted"
            >
               <span className="text-foreground">{category.name}</span>
            </Link>

            {category.hasChildren && (
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-4 py-4 hover:bg-muted"
               >
                  <ChevronRight
                     className={cn(
                        'h-4 w-4 text-muted-foreground transition-transform',
                        isOpen && 'rotate-90'
                     )}
                  />
               </button>
            )}
         </div>

         {category.hasChildren && category.subcategories && (
            <div
               className={cn(
                  'overflow-hidden transition-all',
                  isOpen ? 'max-h-screen' : 'max-h-0'
               )}
            >
               <ul className="py-1">
                  {category.subcategories.map((subcategory) => (
                     <li key={subcategory.name}>
                        <Link
                           to={subcategory.href}
                           className="block py-2 pl-12 text-sm transition-colors hover:bg-muted"
                        >
                           {subcategory.name}
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
}
