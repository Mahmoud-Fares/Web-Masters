import { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type BillingItemRowProps = {
   className?: string;
   product: Product;
};

export default function BillingItemRow({
   product,
   className,
}: BillingItemRowProps) {
   return (
      <div className={cn('flex items-center justify-between gap-6', className)}>
         <div className="flex flex-wrap items-center gap-4">
            <img
               src={product.images[0] || '/placeholder.svg'}
               alt={product.name}
               className="max-w-10"
            />

            <span>{product.name}</span>
         </div>

         <span>${product.price}</span>
      </div>
   );
}
