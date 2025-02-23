import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import SectionTitle from '@/components/section-header';
import { PRODUCTS } from '@/lib/mock-data';

export default function RelatedItemsSection() {
   const products = PRODUCTS.slice(0, 4);

   return (
      <section className="py-section">
         <Container>
            <SectionTitle text="Related Item" />

            <ProductList products={products} className="pt-section" />
         </Container>
      </section>
   );
}
