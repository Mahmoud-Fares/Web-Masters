import Container from '../container';

export default function HeroSection() {
   return (
      // todo make this my-section and fix the layout chaos
      <section className="relative py-section">
         <Container className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <HeroSectionContent />

            <div className="right-0 top-1/2 aspect-[7/6] overflow-hidden rounded-l md:absolute md:h-full md:max-w-[50%] md:-translate-y-1/2 xl:relative xl:max-h-[700px] xl:max-w-full xl:rounded">
               <img
                  src="/images/about-side-image.png"
                  alt="Happy shoppers with shopping bags"
                  className="h-full w-full object-cover object-center"
               />
            </div>
         </Container>
      </section>
   );
}

const HeroSectionContent = () => {
   return (
      <div className="flex flex-col justify-center gap-6 px-4">
         <h1 className="text-4xl font-semibold md:text-5xl">Our Story</h1>

         <div className="space-y-4">
            <p>
               Launched in 2015, Exclusive is South Asia's premier online
               shopping marketplace with an active presence in Bangladesh.
               Supported by wide range of tailored marketing, data and service
               solutions, Exclusive has 10,500 sellers and 300 brands and serves
               3 millions customers across the region.
            </p>
            <p>
               Exclusive has more than 1 Million products to offer, growing at a
               very fast. Exclusive offers a diverse assortment in categories
               ranging from consumer.
            </p>
         </div>
      </div>
   );
};
