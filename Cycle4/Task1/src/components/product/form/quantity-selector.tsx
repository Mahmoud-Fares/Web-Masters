import { Minus, Plus } from 'lucide-react';

import {
   default as DecrementButton,
   default as IncrementButton,
} from '@/components/buttons/quantity-button';

export default function QuantitySelector({
   quantity,
   onQuantityChange,
}: {
   quantity: number;
   onQuantityChange: (quantity: number) => void;
}) {
   return (
      <div className="flex items-center overflow-hidden rounded-md border">
         <DecrementButton
            className="rounded-none border-r border-transparent border-r-border"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
         >
            <Minus />
         </DecrementButton>

         <span className="w-12 text-center">{quantity}</span>

         <IncrementButton
            className="rounded-none border-l border-transparent border-l-border"
            onClick={() => onQuantityChange(quantity + 1)}
         >
            <Plus />
         </IncrementButton>
      </div>
   );
}
