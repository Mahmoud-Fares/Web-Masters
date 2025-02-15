import { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type PricingSummaryProps = {
   className?: string;
   products: Product[];
};

export default function PricingSummary({ products }: PricingSummaryProps) {
   const subtotal = products.reduce((acc, product) => acc + product.price, 0);
   const shipping = 0;
   const total = subtotal + shipping;

   return (
      <div className={cn('space-y-2 divide-y *:flex *:justify-between *:py-2')}>
         <div>
            <span>Subtotal:</span>
            <span>${subtotal}</span>
         </div>

         <div>
            <span>Shipping:</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
         </div>

         <div className="font-semibold">
            <span>Total:</span>
            <span>${total}</span>
         </div>
      </div>
   );
}
