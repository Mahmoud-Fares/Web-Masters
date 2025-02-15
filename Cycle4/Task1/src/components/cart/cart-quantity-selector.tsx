import { ChevronDown, ChevronUp } from 'lucide-react';

import {
   default as DecrementButton,
   default as IncrementButton,
} from '@/components/buttons/quantity-button';

import { CardItem } from './types';

export default function CartQuantitySelector({
   item,
   quantity,
   onQuantityChange,
}: {
   item: CardItem;
   quantity: number;
   onQuantityChange: (id: number, quantity: number) => void;
}) {
   return (
      <div className="flex w-fit items-center overflow-hidden rounded-md border p-1 md:mx-auto">
         {/* //todo: replace this with input field for better UX  */}
         <span className="w-12 text-center">
            {item.quantity.toString().padStart(2, '0')}
         </span>

         <div className="flex flex-col">
            <IncrementButton
               className="size-4 border-transparent"
               onClick={() => onQuantityChange(item.id, item.quantity + 1)}
            >
               <ChevronUp />
            </IncrementButton>

            <DecrementButton
               className="size-4 border-transparent"
               onClick={() =>
                  onQuantityChange(item.id, Math.max(1, quantity - 1))
               }
            >
               <ChevronDown />
            </DecrementButton>
         </div>
      </div>
   );
}
