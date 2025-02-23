import { CartItemRow } from '@/components/cart/overview/cart-item';
import { useCartStore } from '@/lib/stores/cart-store';
import { cn } from '@/lib/utils';

export default function CartItemsList({ className }: { className?: string }) {
   const items = useCartStore((state) => state.items);

   return (
      <div className={cn('space-y-8', className)}>
         {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
         ))}
      </div>
   );
}
