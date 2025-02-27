import { useCartStore } from '@/lib/stores/cart-store';
import { cn } from '@/lib/utils';

import CheckoutItem from './checkout-item';

type CheckoutItemsListProps = {
   className?: string;
};

export default function CheckoutItemsList({
   className,
}: CheckoutItemsListProps) {
   const items = useCartStore((state) => state.items);

   return (
      <div className={cn('space-y-6', className)}>
         {items.map((item, index) => (
            <CheckoutItem key={index} item={item} />
         ))}
      </div>
   );
}
