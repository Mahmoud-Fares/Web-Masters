import { useNavigate } from 'react-router-dom';

import { Product } from '@/types/product';

import Price from '../info/price';
import Rate from '../info/rate';
import Review from '../info/review';

export default function CardDetails({ product }: { product: Product }) {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col gap-2 p-2">
         <h3
            className="cursor-pointer text-lg font-medium"
            onClick={() => navigate(`/product/${product.slug}`)}
         >
            {product.name}
         </h3>

         <Price
            price={product.price}
            discount={product.discount}
            className="text-md text-primary"
         />

         <div className="flex flex-wrap gap-2">
            <Rate rate={product.rating} />

            <Review reviews={product.reviews} showCountOnly={true} />
         </div>
      </div>
   );
}
