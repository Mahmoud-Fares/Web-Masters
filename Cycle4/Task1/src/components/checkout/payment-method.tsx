import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { checkoutSchema } from '@/lib/validation/checkout-validation';

type PaymentMethodProps = {
   className?: string;
   form: UseFormReturn<z.infer<typeof checkoutSchema>>;
};

export default function PaymentMethod({ className, form }: PaymentMethodProps) {
   return (
      <Form {...form}>
         <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
               <FormItem className={className}>
                  <FormLabel className="sr-only">Payment Method</FormLabel>
                  <FormControl>
                     <RadioGroup
                        className="space-y-4 *:flex *:items-center *:gap-2"
                        value={field.value}
                        onValueChange={field.onChange}
                     >
                        <Label
                           htmlFor="bank"
                           className="flex-wrap justify-between"
                        >
                           <div className="flex items-center gap-2">
                              <RadioGroupItem value="bank" id="bank" />
                              Bank
                           </div>

                           <PaymentIcons />
                        </Label>

                        <Label htmlFor="cash">
                           <RadioGroupItem value="cash" id="cash" />
                           Cash on delivery
                        </Label>
                     </RadioGroup>
                  </FormControl>
               </FormItem>
            )}
         />
      </Form>
   );
}

function PaymentIcons() {
   return (
      <span className="flex items-center gap-1">
         <img src="/images/checkout/Bkash.svg" alt="Bkash" className="block" />
         <img src="/images/checkout/Visa.svg" alt="Visa" className="block" />
         <img
            src="/images/checkout/Mastercard.svg"
            alt="Mastercard"
            className="block"
         />
         <img src="/images/checkout/Nagad.svg" alt="Nagad" className="block" />
      </span>
   );
}
