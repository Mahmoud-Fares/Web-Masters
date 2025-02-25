import { cn } from '@/lib/utils';

import { CartSummary } from './cash/cart-summary';
import { CouponForm } from './cash/coupon-form';

type CartCashSectionProps = {
   handleCheckout: () => void;
   className?: string;
};
export default function CartCashSection({
   handleCheckout,
   className,
}: CartCashSectionProps) {
   return (
      <section
         className={cn(
            'flex flex-col justify-between gap-8 lg:flex-row',
            className
         )}
      >
         <CouponForm className="flex-1 content-start" />

         <CartSummary
            className="w-full lg:max-w-md"
            onCheckout={handleCheckout}
         />
      </section>
   );
}
