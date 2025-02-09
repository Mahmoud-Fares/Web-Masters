import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function QuantitySelector({
   quantity,
   onQuantityChange,
}: {
   quantity: number;
   onQuantityChange: (quantity: number) => void;
}) {
   return (
      <div className="flex items-center overflow-hidden rounded-md border border-muted-foreground">
         <Button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            variant={'outline'}
            size={'icon'}
            className="rounded-none border-r border-transparent border-r-muted-foreground shadow-none hover:bg-primary hover:text-white"
         >
            <Minus />
         </Button>

         <span className="w-12 text-center">{quantity}</span>

         <Button
            onClick={() => onQuantityChange(quantity + 1)}
            variant={'outline'}
            size={'icon'}
            className="rounded-none border-l border-transparent border-l-muted-foreground shadow-none hover:bg-primary hover:text-white"
         >
            <Plus />
         </Button>
      </div>
   );
}
