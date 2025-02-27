'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import CheckoutForm from '@/components/checkout/checkout-form';
import { OrderSummary } from '@/components/checkout/order-summary';
import Container from '@/components/container';
import { useCartStore } from '@/lib/stores/cart-store';
import { checkoutSchema } from '@/lib/validation/checkout-validation';

export default function CheckoutPage() {
   const form = useForm<z.infer<typeof checkoutSchema>>({
      resolver: zodResolver(checkoutSchema),
      defaultValues: {
         firstName: '',
         companyName: '',
         streetAddress: '',
         apartment: '',
         townCity: '',
         phoneNumber: '',
         emailAddress: '',
         saveInformation: false,
         paymentMethod: 'bank',
      },
   });

   const { clearCart, removeCoupon } = useCartStore();

   const handleSubmit = form.handleSubmit((values) => {
      console.log('Order details:', values);
      clearCart();
      removeCoupon();
      toast.success('Order placed successfully!');
      form.reset();
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
