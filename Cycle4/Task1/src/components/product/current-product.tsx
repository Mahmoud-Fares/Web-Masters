import { Product } from '@/types/product';

import ImageGallery from './gallery/image-gallery';
import ProductDetails from './product-details';

type CurrentProductProps = {
   product: Product;
};

export default function CurrentProduct({ product }: CurrentProductProps) {
   return (
      <div className="grid grid-cols-1 gap-12 py-section lg:grid-cols-2 lg:gap-16">
         <ImageGallery product={product} />

         <ProductDetails product={product} />
      </div>
   );
}
