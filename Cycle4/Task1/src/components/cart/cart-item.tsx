import CartItemDetails from './cart-item-details';
import CartQuantitySelector from './cart-quantity-selector';
import { CardItem } from './types';

interface CartItemProps {
   item: CardItem;
   onUpdateQuantity: (id: number, quantity: number) => void;
   onRemove: (id: number) => void;
}

export function CartItemRow({
   item,
   onUpdateQuantity,
   onRemove,
}: CartItemProps) {
   return (
      <div className="group grid grid-cols-2 items-center gap-4 rounded px-8 py-4 shadow md:grid-cols-4">
         <CartItemDetails item={item} onRemove={onRemove} />

         <div className="text-center">${item.price}</div>

         <CartQuantitySelector
            item={item}
            quantity={item.quantity}
            onQuantityChange={onUpdateQuantity}
         />

         <div className="text-center md:text-right">
            ${item.price * item.quantity}
         </div>
      </div>
   );
}
