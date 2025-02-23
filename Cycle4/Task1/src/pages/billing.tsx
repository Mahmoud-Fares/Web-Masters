import BillingForm from '@/components/billing/billing-form';
import { OrderSummary } from '@/components/billing/order-summary';
import Container from '@/components/container';

export default function BillingPage() {
   return (
      <Container className="mb-section py-section">
         <h2 className="mb-6 text-2xl font-semibold">Billing Details</h2>

         <div className="grid gap-6 lg:grid-cols-2">
            <BillingForm />

            <OrderSummary />
         </div>
      </Container>
   );
}
