import { Product } from '@/types/product';

import CardDetails from './card/card-details';
import { IconType } from './card/card-icons';
import CardThumbnail from './card/card-thumbnail';

type ProductCardProps = {
   product: Product;
   icons?: IconType[];
};

export default function ProductCard({
   product,
   icons = ['favourite', 'view'],
}: ProductCardProps) {
   return (
      <div className="group flex max-h-[320px] flex-col">
         <CardThumbnail product={product} icons={icons} />
         <CardDetails product={product} />
      </div>
   );
}
