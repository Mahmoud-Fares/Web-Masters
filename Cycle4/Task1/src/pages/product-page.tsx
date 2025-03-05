import { useParams } from 'react-router-dom';

import Container from '@/components/container';
import CurrentProduct from '@/components/product/current-product';
import RelatedItemsSection from '@/components/product/related-items-section';
import { NEW_ARRIVALS, PRODUCTS } from '@/lib/mock-data';

export default function ProductPage() {
   const { slug } = useParams();
   const product =
      PRODUCTS.find((p) => p.slug === slug) ||
      NEW_ARRIVALS.find((p) => p.slug === slug);

   return (
      <Container className="mb-section">
         {product ? (
            <CurrentProduct product={product} />
         ) : (
            <p>Product not found</p>
         )}
         <RelatedItemsSection />
      </Container>
   );
}
