import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/stores/cart-store';
import { cn } from '@/lib/utils';
import { CartItem } from '@/types/cart-types';

type CartItemDetailsProps = {
   className?: string;
   item: CartItem;
};

export default function CartItemDetails({
   className,
   item,
}: CartItemDetailsProps) {
   const removeItem = useCartStore((state) => state.removeItem);

   return (
      <div className={cn('relative', className)}>
         <div className="flex flex-wrap items-center gap-2">
            <img
               src={item.images[0] || '/placeholder.svg'}
               alt={item.name}
               className="block aspect-square max-w-20 object-contain p-2"
            />
            <span className="font-medium">{item.name}</span>
         </div>

         <Button
            variant="ghost"
            size="icon"
            className="invisible absolute left-0 top-0 aspect-square h-6 w-6 -translate-x-1/2 rounded-full bg-destructive text-destructive-foreground opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100"
            onClick={() => removeItem(item.id)}
         >
            <X className="h-4 w-4" />
         </Button>
      </div>
   );
}
