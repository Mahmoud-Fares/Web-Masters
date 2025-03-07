import { Heart, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/stores/cart-store';
import { useWishlistStore } from '@/stores/wishlist-store';

import UserMenu from './user-dropdown-menu/user-menu';

type Action = {
   icon: React.ElementType;
   to: string;
};

const ACTIONS: Action[] = [
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

const CounterBadge = ({ count }: { count: number }) => {
   if (count === 0) return null;
   return (
      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
         {count}
      </span>
   );
};

export default function UserActions() {
   const cartItems = useCartStore((state) => state.items);
   const wishlistItems = useWishlistStore((state) => state.items);

   const renderAction = (action: Action) =>
      action.to === '/account' ? (
         <UserMenu key={action.to} />
      ) : (
         <NavLink
            to={action.to}
            key={action.to}
            className={({ isActive }) =>
               cn(
                  'relative rounded-full transition-all duration-300',
                  isActive && 'bg-primary text-primary-foreground'
               )
            }
         >
            <Button variant="ghost" size="icon" className="rounded-full">
               <action.icon />
               {action.to === '/cart' && (
                  <CounterBadge count={cartItems.length} />
               )}
               {action.to === '/wishlist' && (
                  <CounterBadge count={wishlistItems.length} />
               )}
            </Button>
         </NavLink>
      );

   return (
      <div className="flex items-center gap-1">{ACTIONS.map(renderAction)}</div>
   );
}
