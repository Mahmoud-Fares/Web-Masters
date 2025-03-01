import Container from '@/components/container';
import PromoBanner from '@/components/home/banner/promo-banner';
import { CategorySidebar } from '@/components/home/sidebar';

export default function HeroSection() {
   return (
      <section>
         <Container className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-10">
            <CategorySidebar />

            <PromoBanner className="md:col-span-3 md:pt-10" />
         </Container>
      </section>
   );
}
