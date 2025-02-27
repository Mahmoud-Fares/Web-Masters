import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { checkoutSchema } from '@/lib/validation/checkout-validation';

import { CouponForm } from '../cart/cash/coupon-form';
import CheckoutItemsList from './checkout-items-list';
import PaymentMethod from './payment-method';
import PricingSummary from './pricing-summary';

type OrderSummaryProps = {
   onPlaceOrder: () => void;
   form: UseFormReturn<z.infer<typeof checkoutSchema>>;
};

export function OrderSummary({ onPlaceOrder, form }: OrderSummaryProps) {
   return (
      <Card className="w-full border-none bg-background shadow-none">
         <CardHeader className="sr-only">
            <CardTitle>Order Summary</CardTitle>
         </CardHeader>

         <CardContent className="space-y-4">
            <CheckoutItemsList />

            <PricingSummary className="gap-2 *:py-2" />

            <PaymentMethod form={form} />

            <CouponForm className="gap-4 md:flex-nowrap md:justify-normal" />

            <Button className="w-fit" onClick={onPlaceOrder}>
               Place Order
            </Button>
         </CardContent>
      </Card>
   );
}
