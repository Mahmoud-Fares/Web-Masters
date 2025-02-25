import { ChevronDown, ChevronUp } from 'lucide-react';

import {
   default as DecrementButton,
   default as IncrementButton,
} from '@/components/buttons/quantity-button';
import { useCartStore } from '@/lib/stores/cart-store';
import { CartItem } from '@/types/cart-types';

export default function CartQuantitySelector({ item }: { item: CartItem }) {
   const updateQuantity = useCartStore((state) => state.updateQuantity);

   return (
      <div className="flex w-fit items-center overflow-hidden rounded-md border p-1 md:mx-auto">
         {/* //todo: replace this with input field for better UX  */}
         <span className="w-12 text-center">
            {item.quantity.toString().padStart(2, '0')}
         </span>

         <div className="flex flex-col">
            <IncrementButton
               className="size-4 border-transparent"
               onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
               <ChevronUp />
            </IncrementButton>

            <DecrementButton
               className="size-4 border-transparent"
               onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
               }
            >
               <ChevronDown />
            </DecrementButton>
         </div>
      </div>
   );
}
