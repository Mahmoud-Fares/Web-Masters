import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import SectionTitle from '@/components/section-header';
import { PRODUCTS } from '@/lib/mock-data';

export default function RelatedItemsSection() {
   const products = PRODUCTS.slice(0, 4);

   return (
      <section className="py-10">
         <Container>
            <SectionTitle text="Related Item" />

            <ProductList products={products} className="my-10" />
         </Container>
      </section>
   );
}
