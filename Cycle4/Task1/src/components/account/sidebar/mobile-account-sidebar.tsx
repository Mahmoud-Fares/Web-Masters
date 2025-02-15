import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { SidebarSectionType } from '../account-sidebar';
import SidebarItem from './account-sidebar-item';
import SidebarSection from './account-sidebar-section';

type MobileAccountSidebarProps = {
   sidebarSections: SidebarSectionType[];
};

export default function MobileAccountSidebar({
   sidebarSections,
}: MobileAccountSidebarProps) {
   return (
      <Sheet>
         <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
               <Menu className="h-5 w-5" />
            </Button>
         </SheetTrigger>
         <SheetContent side="bottom" className="p-6">
            <nav className="space-y-4">
               {sidebarSections.map((section) => (
                  <SidebarSection key={section.title} title={section.title}>
                     {section.items.map(({ label, ...item }) => (
                        <SidebarItem key={item.href} {...item}>
                           {label}
                        </SidebarItem>
                     ))}
                  </SidebarSection>
               ))}
            </nav>
         </SheetContent>
      </Sheet>
   );
}
