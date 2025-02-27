import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCheckoutStore } from '@/lib/stores/checkout-store';
import { cn } from '@/lib/utils';

type CouponFormProps = {
   className?: string;
};

export function CouponForm({ className }: CouponFormProps) {
   const [couponCode, setCouponCode] = useState('');
   const { applyCoupon, appliedCoupon, removeCoupon, getDiscount } =
      useCheckoutStore();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      applyCoupon(couponCode.trim());
      setCouponCode('');
   };

   return (
      <div className={cn('space-y-4', className)}>
         {appliedCoupon ? (
            <div className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
               <div>
                  <p className="font-medium">
                     Applied Coupon: {appliedCoupon.code}
                  </p>
                  <p className="text-sm text-muted-foreground">
                     Discount: ${getDiscount().toFixed(2)}
                  </p>
               </div>
               <Button variant="destructive" size="sm" onClick={removeCoupon}>
                  Remove
               </Button>
            </div>
         ) : (
            <form
               onSubmit={handleSubmit}
               className="flex flex-wrap justify-center gap-2 lg:justify-stretch"
            >
               <Input
                  name="coupon"
                  placeholder="Enter Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="h-auto max-w-xs rounded border-border !bg-background py-2"
               />

               <Button type="submit" className="rounded">
                  Apply Coupon
               </Button>
            </form>
         )}
      </div>
   );
}
