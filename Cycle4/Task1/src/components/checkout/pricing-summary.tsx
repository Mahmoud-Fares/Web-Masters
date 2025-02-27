import { useCartStore } from '@/lib/stores/cart-store';
import { cn } from '@/lib/utils';

export default function PricingSummary({ className }: { className?: string }) {
   // todo: add shipping logic
   const { appliedCoupon, getSubtotal } = useCartStore();

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
   const { getSubtotal, getTotal, appliedCoupon } = useCartStore();
   const subtotal = getSubtotal();
   const total = getTotal();

   return (
      <>
         {appliedCoupon ? (
            <>
               <span className="pr-2 font-medium text-primary">
                  ${total.toFixed(2)}
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
   const { appliedCoupon, getDiscount } = useCartStore();

   return (
      <>
         -${getDiscount().toFixed(2)}
         {appliedCoupon?.type === 'percentage' && (
            <span> ({appliedCoupon.value}% off)</span>
         )}
      </>
   );
}
