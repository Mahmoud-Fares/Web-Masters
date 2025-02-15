import { CartItemRow } from '@/components/cart/cart-item';
import { CardItem } from '@/components/cart/types';

type CartItemsListProps = {
   items: CardItem[];
   handleUpdateQuantity: (id: number, quantity: number) => void;
   handleRemoveItem: (id: number) => void;
};

export default function CartItemsList({
   items,
   handleRemoveItem,
   handleUpdateQuantity,
}: CartItemsListProps) {
   return (
      <div className="space-y-4">
         {items.map((item) => (
            <CartItemRow
               key={item.id}
               item={item}
               onUpdateQuantity={handleUpdateQuantity}
               onRemove={handleRemoveItem}
            />
         ))}
      </div>
   );
}
