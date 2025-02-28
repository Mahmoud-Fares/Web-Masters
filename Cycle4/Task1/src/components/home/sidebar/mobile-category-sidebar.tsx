import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/components/ui/sheet';
import { CATEGORIES } from '@/lib/mock-data';

import { MobileCategoryItem } from './mobile-category-item';

export function MobileCategorySidebar() {
   return (
      <Sheet>
         <SheetTrigger asChild>
            <Button
               variant="ghost"
               size="icon"
               className="md:hidden"
               aria-label="Open menu"
            >
               <Menu className="h-6 w-6" />
            </Button>
         </SheetTrigger>

         <SheetContent side="left" className="w-full p-0">
            <SheetHeader className="p-6 pb-2">
               <SheetTitle>Categories</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col">
               {CATEGORIES.map((category) => (
                  <MobileCategoryItem key={category.name} category={category} />
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
}
