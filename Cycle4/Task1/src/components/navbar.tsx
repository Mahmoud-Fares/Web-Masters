import { NavLink } from 'react-router-dom';

import SignedOut from '@/components/signed-out';
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
   const LinkComponent = ({ label, to }: { label: string; to: string }) => {
      return (
         <NavLink
            to={to}
            key={label}
            className={({ isActive }) =>
               cn(
                  'border-b border-b-transparent pb-1 hover:border-black',
                  isActive && 'border-b-black'
               )
            }
         >
            {label}
         </NavLink>
      );
   };

   return (
      <nav
         className={cn(
            'hidden flex-[2] items-center justify-center gap-8 lg:flex',
            className
         )}
      >
         {links.map((link) =>
            link.to !== '/signup' ? (
               <LinkComponent
                  key={link.label}
                  label={link.label}
                  to={link.to}
               />
            ) : (
               <SignedOut key={link.label}>
                  <LinkComponent label={link.label} to={link.to} />
               </SignedOut>
            )
         )}
      </nav>
   );
};
