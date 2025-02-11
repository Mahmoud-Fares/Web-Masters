import OwnersSection from '@/components/about/owners/owners-section';
import ServiceSection from '@/components/about/service/service-section';
import StatisticsSection from '@/components/about/statistics/statistics-section';

export default function AboutPage() {
   return (
      <>
         <StatisticsSection />

         <OwnersSection />

         <ServiceSection />
      </>
   );
}
