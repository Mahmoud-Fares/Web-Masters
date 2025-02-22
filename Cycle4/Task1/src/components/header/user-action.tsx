import { Heart, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ACTIONS = [
   {
      icon: Heart,
      to: '/wishlist',
   },
   {
      icon: ShoppingCart,
      to: '/cart',
   },
   {
      icon: User,
      to: '/account',
   },
];

export default function UserActions() {
   return (
      <div className="flex items-center gap-1">
         {ACTIONS.map((action) => (
            <NavLink
               to={action.to}
               key={action.to}
               className={({ isActive }) =>
                  cn(
                     'overflow-hidden rounded-full transition-all duration-300',
                     isActive && 'bg-primary text-primary-foreground'
                  )
               }
            >
               <Button variant="ghost" size="icon">
                  <action.icon />
               </Button>
            </NavLink>
         ))}
      </div>
   );
}
