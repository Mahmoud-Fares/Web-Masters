import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import SectionTitle from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

export default function RecommendationSection() {
   const products = PRODUCTS.slice(0, 4);
   return (
      <section className="py-section">
         <Container>
            <div className="flex items-start justify-between">
               <SectionTitle text="Recommendations">Just For You</SectionTitle>
               <Button variant={'outline'}>See All</Button>
            </div>

            <ProductList products={products} className="py-section" />
         </Container>
      </section>
   );
}
