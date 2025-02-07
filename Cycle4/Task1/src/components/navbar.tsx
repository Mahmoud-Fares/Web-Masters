import { NavLink } from 'react-router-dom';

import { cn } from '@/lib/utils';

const links = [
   {
      label: 'Home',
      to: '/',
   },
   {
      label: 'Contact',
      to: '/contact',
   },
   {
      label: 'About',
      to: '/about',
   },
   {
      label: 'Sign Up',
      to: '/signup',
   },
];

export const HeaderNavbar = ({ className }: { className?: string }) => {
   return (
      <nav
         className={cn(
            'hidden flex-[2] items-center justify-center gap-8 lg:flex',
            className
         )}
      >
         {links.map((link) => (
            <NavLink
               to={link.to}
               key={link.label}
               className={({ isActive }) =>
                  cn(
                     'border-b border-b-transparent pb-1 hover:border-black',
                     isActive && 'border-b-black'
                  )
               }
            >
               {link.label}
            </NavLink>
         ))}
      </nav>
   );
};
