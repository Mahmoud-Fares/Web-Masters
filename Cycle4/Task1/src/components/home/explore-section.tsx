import { useNavigate } from 'react-router-dom';

import Container from '@/components/container';
import CustomCarousel from '@/components/home/custom-carousel';
import ProductCard from '@/components/product/product-card';
import SectionTitle from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

export default function ExploreSection() {
   const navigate = useNavigate();

   return (
      <section>
         <Container className="py-section">
            <SectionTitle text="Our Products">
               Explore Our Products
            </SectionTitle>

            <CustomCarousel
               data={[...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]}
               renderItem={(item) => <ProductCard product={item} />}
               className="py-6"
               rows={2}
            />

            <Button
               className="mx-auto mt-section flex"
               onClick={() => navigate('/shop')}
            >
               View All Products
            </Button>
         </Container>
      </section>
   );
}
