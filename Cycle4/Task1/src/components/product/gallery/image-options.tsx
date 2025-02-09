import { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type ImageOptionsProps = {
   product: Product;
   selectedIndex: number;
   setSelectedIndex: (index: number) => void;
};
export default function ImageOptions({
   product,
   selectedIndex,
   setSelectedIndex,
}: ImageOptionsProps) {
   return (
      <div className="flex flex-wrap gap-4 md:flex-col">
         {product.images.map((image, index) => (
            <button
               key={index}
               className={cn(
                  'aspect-square w-16 overflow-hidden rounded border border-transparent bg-secondary p-2 transition-all hover:scale-105 hover:border-primary md:w-20',
                  selectedIndex === index && 'border-primary'
               )}
               onClick={() => setSelectedIndex(index)}
            >
               <img
                  src={image || '/placeholder.svg'}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-contain"
               />
            </button>
         ))}
      </div>
   );
}
