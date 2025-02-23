import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type CouponFormProps = {
   onApply: (code: string) => void;
   className?: string;
};

export function CouponForm({ onApply, className }: CouponFormProps) {
   const [couponCode, setCouponCode] = useState('');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      onApply(couponCode);

      setCouponCode('');
   };

   return (
      <form
         onSubmit={handleSubmit}
         className={cn(
            'flex flex-wrap justify-center gap-2 lg:justify-stretch',
            className
         )}
      >
         <Input
            name="coupon"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="h-auto max-w-xs rounded border-border !bg-background py-2"
         />

         <Button type="submit" className="rounded">
            Apply Coupon
         </Button>
      </form>
   );
}
