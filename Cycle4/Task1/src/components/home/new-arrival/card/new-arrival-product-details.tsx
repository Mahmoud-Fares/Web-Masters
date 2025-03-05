import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { Product } from '@/types/product';

type NewArrivalProductDetailsProps = {
   product: Product;
   isSmall: boolean;
};

export default function NewArrivalProductDetails({
   product: { name, description, id },
   isSmall,
}: NewArrivalProductDetailsProps) {
   return (
      <div
         className={cn(
            'relative z-10 flex flex-col gap-1.5 pb-6',
            isSmall && 'gap-0.5 pb-4 sm:gap-1'
         )}
      >
         <h2
            className={cn(
               'text-lg font-medium lg:text-2xl',
               isSmall && 'text-md'
            )}
         >
            {name}
         </h2>

         <p
            className={cn(
               'max-w-[30ch] leading-relaxed opacity-90',
               isSmall && 'text-xs lg:text-base'
            )}
         >
            {description}
         </p>

         <Link
            to={`/products/${id}`}
            className="inline-block text-white transition-opacity hover:opacity-80"
         >
            <span className="border-b border-white pb-0.5">Shop Now</span>
         </Link>
      </div>
   );
}
