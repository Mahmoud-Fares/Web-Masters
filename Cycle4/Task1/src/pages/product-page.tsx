import Container from '@/components/container';
import CurrentProduct from '@/components/product/current-product';
import SectionTitle from '@/components/related-item';

export default function ProductPage() {
   return (
      <Container>
         <CurrentProduct />

         {/* related products */}
         <section className="pb-20 pt-10">
            <SectionTitle text="Related Item" />
         </section>
      </Container>
   );
}
