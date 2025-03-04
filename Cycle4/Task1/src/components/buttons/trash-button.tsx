import { TrashIcon } from 'lucide-react';

import { useWishlistStore } from '@/stores/wishlist-store';
import { Product } from '@/types/product';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

type TrashButtonProps = UserActionButtonProps & {
   product: Product;
};
export default function TrashButton({
   variant,
   size,
   className,
   product,
}: TrashButtonProps) {
   const { toggleItem } = useWishlistStore();
   return (
      <UserActionButton
         onClick={() => toggleItem(product)}
         className={className}
         variant={variant}
         size={size}
      >
         <TrashIcon />
      </UserActionButton>
   );
}
