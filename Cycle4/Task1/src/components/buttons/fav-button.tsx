import { Heart } from 'lucide-react';

import { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { useWishlistStore } from '@/stores/wishlist-store';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

type FavButtonProps = UserActionButtonProps & {
   product: Product;
};
export default function FavButton({
   variant,
   size,
   className,
   product,
}: FavButtonProps) {
   const { items, toggleItem } = useWishlistStore();
   const isInWishlist = items.some((item) => item?.id === product.id);

   return (
      <UserActionButton
         className={cn(
            className,
            isInWishlist && 'bg-primary text-primary-foreground'
         )}
         variant={variant}
         size={size}
         onClick={() => toggleItem(product)}
      >
         <Heart />
      </UserActionButton>
   );
}
