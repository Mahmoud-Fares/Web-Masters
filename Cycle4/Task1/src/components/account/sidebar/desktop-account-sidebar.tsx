import { SidebarSectionType } from '../account-sidebar';
import SidebarItem from './account-sidebar-item';
import SidebarSection from './account-sidebar-section';

type DesktopAccountSidebarProps = {
   sidebarSections: SidebarSectionType[];
};

export default function DesktopAccountSidebar({
   sidebarSections,
}: DesktopAccountSidebarProps) {
   return (
      <aside className="hidden w-full md:block">
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
      </aside>
   );
}
