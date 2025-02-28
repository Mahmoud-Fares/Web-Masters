import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CategoryItemType } from '@/lib/mock-data';

import { SubcategoryList } from './subcategory-list';

type DesktopCategoryItemProps = {
   category: CategoryItemType;
};

export function DesktopCategoryItem({ category }: DesktopCategoryItemProps) {
   return (
      <div className="group relative">
         <div className="flex w-full items-center">
            <Link
               to={category.href}
               className="flex flex-1 items-center justify-between px-6 py-4 transition-colors hover:bg-muted"
            >
               <span className="text-foreground">{category.name}</span>
               {category.hasChildren && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
               )}
            </Link>
         </div>

         {category.hasChildren && category.subcategories && (
            <SubcategoryList subcategories={category.subcategories} />
         )}
      </div>
   );
}
