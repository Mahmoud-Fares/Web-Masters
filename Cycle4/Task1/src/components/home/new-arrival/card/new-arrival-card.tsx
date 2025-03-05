import { cn } from '@/lib/utils';
import { Product } from '@/types/product';

import NewArrivalProductDetails from './new-arrival-product-details';

type NewArrivalCardProps = {
   product: Product;
   size?: 'small' | 'default';
   className?: string;
   variant?: 'cover' | 'default';
};

export default function NewArrivalCard({
   product,
   size = 'default',
   className,
   variant = 'default',
}: NewArrivalCardProps) {
   const isSmall = size === 'small';
   const isCover = variant === 'cover';

   return (
      <article
         className={cn(
            'relative flex aspect-square items-end overflow-hidden rounded bg-black/95 p-6 pb-0 text-white',
            isCover && 'aspect-auto',
            className
         )}
      >
         <ImageWrapper
            imageUrl={product.images[0]}
            title={product.name}
            isCover={isCover}
            isSmall={isSmall}
         />

         <NewArrivalProductDetails product={product} isSmall={isSmall} />
      </article>
   );
}

type ImageWrapperProps = {
   imageUrl: string;
   title: string;
   isCover?: boolean;
   isSmall?: boolean;
};
const ImageWrapper = ({
   imageUrl,
   title,
   isCover = false,
   isSmall = false,
}: ImageWrapperProps) => (
   <figure
      className={cn(
         'absolute inset-0 z-0 flex aspect-square items-end justify-end p-4 pb-0',
         isSmall && !isCover && 'p-4',
         isCover && 'inset-auto bottom-0 right-0 aspect-auto max-w-[80%]'
      )}
   >
      <img
         src={imageUrl || '/placeholder.svg'}
         alt={title}
         className="object-contain"
      />
   </figure>
);
