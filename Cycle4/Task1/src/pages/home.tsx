import ServiceSection from '@/components/about/service/service-section';
import BestSalesSection from '@/components/home/best-sales-section';
import CategoriesSection from '@/components/home/categories-section';
import ExploreSection from '@/components/home/explore-section';
import FlashSalesSection from '@/components/home/flash-sales-section';
import HeroSection from '@/components/home/hero-section';
import NewArrivalsSection from '@/components/home/new-arrival/new-arrivals-section';

export default function Home() {
   return (
      <>
         <HeroSection />

         <FlashSalesSection />

         <CategoriesSection />

         <BestSalesSection />

         <ExploreSection />

         <NewArrivalsSection />

         <ServiceSection />
      </>
   );
}
