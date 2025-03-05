import { useNavigate } from 'react-router-dom';

import Container from '@/components/container';
import SectionTitle from '@/components/section-header';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

import ProductList from '../product/product-list';

export default function BestSalesSection() {
   const navigate = useNavigate();

   return (
      <section>
         <Container className="py-section">
            <div className="flex flex-wrap items-end justify-between gap-4">
               <SectionTitle text="This Month">
                  Best Selling Products
               </SectionTitle>
               <Button onClick={() => navigate('/shop')}>View All</Button>
            </div>

            <ProductList
               products={PRODUCTS.slice(0, 4)}
               className="mt-section"
            />
         </Container>
      </section>
   );
}
