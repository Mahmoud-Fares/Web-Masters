import { cn } from '@/lib/utils';
import { CartItem } from '@/types/cart-types';

type CheckoutItemProps = {
   className?: string;
   item: CartItem;
};

export default function CheckoutItem({ item, className }: CheckoutItemProps) {
   return (
      <div className={cn('flex items-center justify-between gap-6', className)}>
         <div className="flex flex-wrap items-center gap-4">
            <img
               src={item.images[0] || '/placeholder.svg'}
               alt={item.name}
               className="max-w-10"
            />

            <span>{item.name}</span>
         </div>

         <span>
            ${item.price} x {item.quantity}
         </span>
      </div>
   );
}
