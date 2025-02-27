import { cn } from '@/lib/utils';

import { CartSummary } from './cash/cart-summary';
import { CouponForm } from './cash/coupon-form';

type CartCashSectionProps = {
   className?: string;
};
export default function CartCashSection({ className }: CartCashSectionProps) {
   return (
      <section
         className={cn(
            'flex flex-col justify-between gap-8 lg:flex-row',
            className
         )}
      >
         <CouponForm className="flex-1 content-start" />

         <CartSummary className="w-full lg:max-w-md" />
      </section>
   );
}
