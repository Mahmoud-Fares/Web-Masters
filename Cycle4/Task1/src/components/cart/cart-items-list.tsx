import { CartItemRow } from '@/components/cart/cart-item';
import { useCartStore } from '@/lib/stores/cart-store';

export default function CartItemsList() {
   const items = useCartStore((state) => state.items);

   return (
      <div className="space-y-4">
         {items.map((item) => (
            <CartItemRow key={item.id} item={item} />
         ))}
      </div>
   );
}
