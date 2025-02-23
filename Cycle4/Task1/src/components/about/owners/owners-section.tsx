import Container from '@/components/container';

import OwnersComponent from './owners-component';
import Pagination from './pagination';

export default function OwnersSection() {
   return (
      <section className="py-section">
         <Container>
            <OwnersComponent />

            <Pagination />
         </Container>
      </section>
   );
}
