'use no memo';

import { cn } from '@/lib/utils';
import { useCartStore } from '@/stores/cart-store';
import { useCheckoutStore } from '@/stores/checkout-store';

export default function PricingSummary({ className }: { className?: string }) {
   // todo: add shipping logic
   const { appliedCoupon, getSubtotal } = useCheckoutStore();
   // is used only for subscribing for any changes in cart items
   const items = useCartStore((state) => state.items);
   items;

   const PricingSummaryItems = [
      {
         label: 'Subtotal:',
         value: `$${getSubtotal().toFixed(2)}`,
      },
      { label: 'Shipping:', value: 'Free' },
      ...(appliedCoupon
         ? [
              {
                 label: 'Discount:',
                 value: <DiscountDisplay />,
                 className: 'text-green-600',
              },
           ]
         : []),
      {
         label: 'Total:',
         value: <PriceDisplay />,
      },
   ];

   return (
      <div className={cn('grid divide-y', className)}>
         {PricingSummaryItems.map((item, index) => (
            <div className="flex justify-between" key={index}>
               <span>{item.label}</span>
               <span className={item.className}>{item.value}</span>
            </div>
         ))}
      </div>
   );
}

function PriceDisplay() {
   const { appliedCoupon, getTotal, getSubtotal } = useCheckoutStore();
   const subtotal = getSubtotal();
   const total = getTotal();

   return (
      <>
         {appliedCoupon ? (
            <>
               <span className="pr-2 font-medium text-primary">
                  ${Math.max(total, 0).toFixed(2)}
               </span>

               <span className="text-muted-foreground line-through">
                  ${subtotal.toFixed(2)}
               </span>
            </>
         ) : (
            <span className="font-medium">${subtotal.toFixed(2)}</span>
         )}
      </>
   );
}

function DiscountDisplay() {
   const { appliedCoupon, getDiscount } = useCheckoutStore();

   return (
      <>
         -${getDiscount().toFixed(2)}
         {appliedCoupon?.type === 'percentage' && (
            <span> ({appliedCoupon.value}% off)</span>
         )}
      </>
   );
}
