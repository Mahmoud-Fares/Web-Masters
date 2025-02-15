import { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

import BillingItemRow from './billing-item-row';

type BillingItemCartProps = {
   className?: string;
   products: Product[];
};

export default function BillingItemsList({
   products,
   className,
}: BillingItemCartProps) {
   return (
      <div className={cn('space-y-4', className)}>
         {products.map((product, index) => (
            <BillingItemRow key={index} product={product} />
         ))}
      </div>
   );
}
