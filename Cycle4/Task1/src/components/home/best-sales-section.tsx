import { useNavigate } from 'react-router-dom';

import Container from '@/components/container';
import CustomCarousel from '@/components/home/custom-carousel';
import ProductCard from '@/components/product/product-card';
import SectionTitle from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

import MusicHero from './music-hero/music-hero';

export default function BestSalesSection() {
   const navigate = useNavigate();

   return (
      <section>
         <Container className="pt-section">
            <div className="flex flex-wrap items-end justify-between gap-4">
               <SectionTitle text="This Month">
                  Best Selling Products
               </SectionTitle>
               <Button onClick={() => navigate('/shop')}>View All</Button>
            </div>

            <CustomCarousel
               data={[...PRODUCTS, ...PRODUCTS].slice(0, 4)}
               renderItem={(item) => <ProductCard product={item} />}
               className="py-6"
               navigationClassName="sm:top-auto sm:translate-y-2/3"
            />

            <MusicHero />
         </Container>
      </section>
   );
}
