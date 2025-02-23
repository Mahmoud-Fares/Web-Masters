import { PRODUCTS } from '@/lib/mock-data';

import ImageGallery from './gallery/image-gallery';
import ProductDetails from './product-details';

export default function CurrentProduct() {
   const product = PRODUCTS[0];
   return (
      <div className="grid grid-cols-1 gap-12 py-section lg:grid-cols-2 lg:gap-16">
         <ImageGallery product={product} />

         <ProductDetails product={product} />
      </div>
   );
}
