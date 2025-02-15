import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { CartState } from './types';

type CartSummaryProps = {
   cart: CartState;
   onCheckout: () => void;
   className?: string;
};

export function CartSummary({ cart, onCheckout, className }: CartSummaryProps) {
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
