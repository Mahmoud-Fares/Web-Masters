import { CartItemRow } from '@/components/cart/overview/cart-item';
import { cn } from '@/lib/utils';
import { useCartStore } from '@/stores/cart-store';

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
