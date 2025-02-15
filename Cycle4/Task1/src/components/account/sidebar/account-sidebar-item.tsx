import { NavLink } from 'react-router-dom';

import { cn } from '@/lib/utils';

type SidebarItemProps = {
   href: string;
   children: React.ReactNode;
   isActive?: boolean;
};

export default function SidebarItem({
   href,
   children,
   isActive,
}: SidebarItemProps) {
   return (
      <NavLink
         to={href}
         className={cn(
            'block rounded-md py-2 pl-6 text-sm text-muted-foreground hover:bg-muted lg:pl-8',
            isActive && 'font-medium text-primary'
         )}
      >
         {children}
      </NavLink>
   );
}
