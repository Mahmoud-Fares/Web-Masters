import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRODUCTS } from '@/lib/mock-data';

import { CouponForm } from '../cart/cash/coupon-form';
import BillingItemsList from './billing-items-list';
import PaymentMethod from './payment-method';
import PricingSummary from './pricing-summary';

const products = PRODUCTS.slice(0, 2);

export function OrderSummary() {
   const [paymentMethod, setPaymentMethod] = useState('bank');

   const handleApplyCoupon = (code: string) => {
      console.log('Applying coupon:', code);
   };

   const handlePlaceOrder = () => {
      // Handle order placement here
      console.log('Placing order with payment method:', paymentMethod);
   };

   return (
      <Card className="w-full border-none bg-background shadow-none">
         <CardHeader>
            <CardTitle className="sr-only">Order Summary</CardTitle>
         </CardHeader>

         <CardContent className="space-y-4">
            <BillingItemsList products={products} />

            <PricingSummary products={products} />

            <PaymentMethod setPaymentMethod={setPaymentMethod} />

            <CouponForm
               className="gap-4 md:flex-nowrap md:justify-normal"
               onApply={handleApplyCoupon}
            />

            <Button className="w-fit rounded" onClick={handlePlaceOrder}>
               Place Order
            </Button>
         </CardContent>
      </Card>
   );
}
