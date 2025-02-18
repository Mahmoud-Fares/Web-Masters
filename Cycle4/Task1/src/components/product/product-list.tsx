import { Product } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

import { IconType } from './card/card-icons';
import ProductCard from './product-card';

type ProductListProps = {
   products: Product[];
   icons?: IconType[];
   className?: string;
};

export default function ProductList({
   products,
   icons = ['favourite', 'view'],
   className,
}: ProductListProps) {
   return (
      <div
         className={cn(
            'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
            className
         )}
      >
         {products.map((product) => (
            <ProductCard key={product.id} product={product} icons={icons} />
         ))}
      </div>
   );
}
