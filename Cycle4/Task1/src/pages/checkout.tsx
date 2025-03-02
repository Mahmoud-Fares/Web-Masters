'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import CheckoutForm from '@/components/checkout/checkout-form';
import { OrderSummary } from '@/components/checkout/order-summary';
import Container from '@/components/container';
import { checkoutSchema } from '@/lib/validation/checkout-validation';
import { useCheckoutStore } from '@/stores/checkout-store';

export default function CheckoutPage() {
   const { savedUserInfo, placeOrder } = useCheckoutStore();

   const form = useForm<z.infer<typeof checkoutSchema>>({
      resolver: zodResolver(checkoutSchema),
      defaultValues: {
         firstName: savedUserInfo?.firstName || '',
         companyName: savedUserInfo?.companyName || '',
         streetAddress: savedUserInfo?.streetAddress || '',
         apartment: savedUserInfo?.apartment || '',
         townCity: savedUserInfo?.townCity || '',
         phoneNumber: savedUserInfo?.phoneNumber || '',
         emailAddress: savedUserInfo?.emailAddress || '',
         saveInformation: Boolean(savedUserInfo),
         paymentMethod: savedUserInfo?.paymentMethod || 'bank',
      },
   });

   const handleSubmit = form.handleSubmit((values) => {
      console.log('Order details:', values);
      const success = placeOrder();
      if (success) form.reset();
   });

   return (
      <Container className="mb-section py-section">
         <h2 className="mb-6 text-2xl font-semibold">Billing Details</h2>

         <div className="grid gap-6 lg:grid-cols-2 lg:gap-14">
            <CheckoutForm form={form} />
            <OrderSummary onPlaceOrder={handleSubmit} form={form} />
         </div>
      </Container>
   );
}
