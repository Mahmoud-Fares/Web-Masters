import { TrashIcon } from 'lucide-react';

import { Product } from '@/lib/mock-data';
import { useWishlistStore } from '@/lib/stores/wishlist-store';

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
