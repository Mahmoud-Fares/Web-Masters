import { useNavigate } from 'react-router-dom';

import Container from '@/components/container';
import CustomCarousel from '@/components/home/custom-carousel';
import ProductCard from '@/components/product/product-card';
import SectionTitle from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

export default function FlashSalesSection() {
   const navigate = useNavigate();

   return (
      <section className="pt-section">
         <Container className="border-b py-section">
            <SectionTitle text="Today's">Flash Sales</SectionTitle>

            <CustomCarousel
               data={[...PRODUCTS, ...PRODUCTS]}
               renderItem={(item) => <ProductCard product={item} />}
               className="py-6"
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
