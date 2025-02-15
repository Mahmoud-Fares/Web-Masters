import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

type PaymentMethodProps = {
   className?: string;
   setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
};

export default function PaymentMethod({
   className,
   setPaymentMethod,
}: PaymentMethodProps) {
   return (
      <RadioGroup
         className={cn('space-y-4', className)}
         defaultValue="bank"
         onValueChange={setPaymentMethod}
      >
         <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
               <RadioGroupItem value="bank" id="bank" />
               <Label htmlFor="bank">Bank</Label>
            </div>

            <Label htmlFor="bank" className="flex items-center gap-1">
               <img
                  className="block"
                  src="/images/billing/Bkash.svg"
                  alt="Bkash"
               />
               <img
                  className="block"
                  src="/images/billing/Visa.svg"
                  alt="Visa"
               />
               <img
                  className="block"
                  src="/images/billing/Mastercard.svg"
                  alt="Mastercard"
               />
               <img
                  className="block"
                  src="/images/billing/Nagad.svg"
                  alt="Nagad.svg"
               />
            </Label>
         </div>

         <div className="flex items-center gap-2">
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash">Cash on delivery</Label>
         </div>
      </RadioGroup>
   );
}
