import { CATEGORIES } from '@/lib/mock-data';

import { DesktopCategoryItem } from './desktop-category-item';
import { MobileCategorySidebar } from './mobile-category-sidebar';

export function CategorySidebar() {
   return (
      <>
         <MobileCategorySidebar />

         <div className="hidden border-r pt-7 md:block">
            <nav className="flex flex-col">
               {CATEGORIES.map((category) => (
                  <DesktopCategoryItem
                     key={category.name}
                     category={category}
                  />
               ))}
            </nav>
         </div>
      </>
   );
}
