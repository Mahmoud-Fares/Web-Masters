import { CartItem } from '@/types/cart-types';

import CartItemDetails from './cart-item-details';
import CartQuantitySelector from './cart-quantity-selector';

export function CartItemRow({ item }: { item: CartItem }) {
   return (
      <div className="group grid grid-cols-2 items-center gap-4 rounded px-8 py-4 shadow md:grid-cols-4">
         <CartItemDetails item={item} />

         <div className="text-center">${item.price}</div>

         <CartQuantitySelector item={item} />

         <div className="text-center md:text-right">
            ${(item.price * item.quantity).toFixed(2)}
         </div>
      </div>
   );
}
