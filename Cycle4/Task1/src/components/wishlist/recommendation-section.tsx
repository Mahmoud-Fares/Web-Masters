import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import SectionTitle from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

export default function RecommendationSection() {
   const products = PRODUCTS.slice(0, 4);
   return (
      <Container>
         <div className="flex items-start justify-between">
            <SectionTitle text="Wishlist">Just For You</SectionTitle>
            <Button className="px-8" variant={'outline'}>
               See All
            </Button>
         </div>

         <ProductList products={products} className="my-10" />
      </Container>
   );
}
