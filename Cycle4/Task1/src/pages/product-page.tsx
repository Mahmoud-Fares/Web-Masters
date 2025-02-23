import Container from '@/components/container';
import CurrentProduct from '@/components/product/current-product';
import RelatedItemsSection from '@/components/product/related-items-section';

export default function ProductPage() {
   return (
      <Container className="mb-section">
         <CurrentProduct />

         <RelatedItemsSection />
      </Container>
   );
}
