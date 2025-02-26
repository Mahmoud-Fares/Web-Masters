import PricingSummary from '@/components/billing/pricing-summary';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type CartSummaryProps = {
   onCheckout: () => void;
   className?: string;
};

export function CartSummary({ onCheckout, className }: CartSummaryProps) {
   return (
      <Card className={cn('w-full rounded bg-background', className)}>
         <CardHeader>
            <CardTitle>Cart Total</CardTitle>
         </CardHeader>

         <CardContent>
            <PricingSummary className="gap-4 *:pt-4" />
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
