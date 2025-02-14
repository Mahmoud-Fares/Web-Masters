import { Product } from '@/lib/mock-data';

import Price from './price';
import Rate from './rate';
import Review from './review';
import StockCheck from './stock-check';

export default function ProductInfo({ product }: { product: Product }) {
   return (
      <div className="space-y-2">
         <h2 className="text-2xl font-semibold">{product.name}</h2>

         <div className="flex flex-wrap items-center gap-4">
            <Review reviews={product.reviews} className="border-r-2 pr-4" />

            <Rate rate={product.rating} />

            <StockCheck inStock={product.inStock} />
         </div>

         <Price price={product.price} discount={product.discount} />

         <p className="pb-6 pt-4">{product.description}</p>
      </div>
   );
}
