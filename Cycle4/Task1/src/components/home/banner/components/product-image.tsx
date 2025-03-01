import { cn } from '@/lib/utils';

type ProductImageProps = {
   image: string;
   title: string;
   className?: string;
};

export function ProductImage({ image, title, className }: ProductImageProps) {
   return (
      <div className="flex items-center justify-center">
         <img
            src={image || '/placeholder.svg'}
            alt={title}
            className={cn('block aspect-square object-contain', className)}
         />
      </div>
   );
}
