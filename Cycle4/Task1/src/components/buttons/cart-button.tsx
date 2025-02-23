import { ShoppingCart } from 'lucide-react';

import { Product } from '@/lib/mock-data';
import { useCartStore } from '@/lib/stores/cart-store';
import { cn } from '@/lib/utils';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

type CartButtonProps = UserActionButtonProps & { product: Product };
export default function CartButton({
   product,
   variant,
   size,
   className,
   children,
}: CartButtonProps) {
   const addItem = useCartStore((state) => state.addItem);

   return (
      <UserActionButton
         className={cn({ 'flex items-center gap-2': children }, className)}
         variant={variant}
         size={size}
         onClick={() => addItem({ product })}
      >
         <ShoppingCart /> {children}
      </UserActionButton>
   );
}
