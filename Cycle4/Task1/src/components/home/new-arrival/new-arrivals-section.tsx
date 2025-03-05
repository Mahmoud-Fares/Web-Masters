import Container from '@/components/container';
import SectionTitle from '@/components/section-header';

import NewArrivalsGrid from './new-arrivals-grid';

export default function NewArrivalsSection() {
   return (
      <section className="py-section">
         <Container>
            <SectionTitle text="Featured">New Arrival</SectionTitle>

            <NewArrivalsGrid className="pt-section" />
         </Container>
      </section>
   );
}
