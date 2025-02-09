import { Product } from '@/lib/mock-data';

import Rate from './rate';
import Review from './review';
import StockCheck from './stock-check';

export default function ProductInfo({ product }: { product: Product }) {
   return (
      <div className="space-y-2">
         <h2 className="text-2xl font-semibold">{product.name}</h2>

         <div className="flex flex-wrap items-center gap-4">
            <Review reviews={product.reviews} />

            <Rate rate={product.rating} />

            <StockCheck inStock={product.inStock} />
         </div>

         <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>

         <p className="pb-6 pt-4">{product.description}</p>
      </div>
   );
}
