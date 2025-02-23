import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { CartItem, useCartStore } from '@/lib/stores/cart-store';
import { cn } from '@/lib/utils';

import { CartState } from './types';

type CartSummaryProps = {
   onCheckout: () => void;
   className?: string;
};

const calculateTotals = (items: CartItem[]): CartState => {
   // todo: add more logic in the calculation (ex. case of shipping isn't free)
   const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
   );
   return {
      items,
      subtotal,
      shipping: 'Free',
      total: subtotal,
   };
};
export function CartSummary({ onCheckout, className }: CartSummaryProps) {
   const { items } = useCartStore();

   const cart = calculateTotals(items);

   return (
      <Card className={cn('w-full rounded bg-background', className)}>
         <CardHeader>
            <CardTitle>Cart Total</CardTitle>
         </CardHeader>

         <CardContent className="grid gap-4 divide-y">
            <div className="flex justify-between pt-4">
               <span>Subtotal:</span>
               <span className="font-medium">${cart.subtotal}</span>
            </div>

            <div className="flex justify-between pt-4">
               <span>Shipping:</span>
               <span className="font-medium">{cart.shipping}</span>
            </div>

            <div className="flex justify-between pt-4">
               <span>Total:</span>
               <span className="font-medium">${cart.total}</span>
            </div>
         </CardContent>

         <CardFooter>
            <Button
               className="mx-auto w-full sm:max-w-[60%]"
               onClick={onCheckout}
            >
               Process to checkout
            </Button>
         </CardFooter>
      </Card>
   );
}
