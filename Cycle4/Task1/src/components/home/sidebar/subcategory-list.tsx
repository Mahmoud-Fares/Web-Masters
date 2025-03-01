import { Link } from 'react-router-dom';

import { SubcategoryType } from '@/lib/mock-data';

type SubcategoryListProps = {
   subcategories: SubcategoryType[];
};

export function SubcategoryList({ subcategories }: SubcategoryListProps) {
   return (
      <div className="invisible absolute left-full top-0 z-40 pl-2 opacity-0 transition-all duration-500 group-hover:visible group-hover:z-50 group-hover:opacity-100 lg:pl-4">
         <ul className="w-48 rounded-md border bg-background py-1 shadow-md">
            {subcategories.map((subcategory) => (
               <li key={subcategory.name}>
                  <Link
                     to={subcategory.href}
                     className="block px-4 py-2 text-sm transition-colors hover:bg-muted"
                  >
                     {subcategory.name}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
}
