import { ShoppingCart } from 'lucide-react';

import { cn } from '@/lib/utils';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function CartButton({
   variant,
   size,

   className,
   children,
}: UserActionButtonProps) {
   return (
      <UserActionButton
         className={cn({ 'flex items-center gap-2': children }, className)}
         variant={variant}
         size={size}
      >
         <ShoppingCart /> {children}
      </UserActionButton>
   );
}
