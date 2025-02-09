import { Product } from '@/lib/mock-data';

import BuyForm from '../product/form/buy-form';
import DeliverySection from './delivery-section';
import ProductInfo from './info/product-info';

export default function ProductDetails({ product }: { product: Product }) {
   return (
      <section>
         <ProductInfo product={product} />

         <BuyForm product={product} />

         <DeliverySection />
      </section>
   );
}
