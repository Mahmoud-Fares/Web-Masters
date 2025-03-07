import { cn } from '@/lib/utils';

import Container from '../container';

export default function HeroSection() {
   return (
      // two grids the image is outside the container and the details are inside the container
      <section className="relative pb-section *:grid *:grid-cols-1 *:items-center *:gap-8 *:lg:grid-cols-2">
         {/* in small screens one columns grid with the details */}
         {/* in large screens two columns grid with the details and an empty div to put the details on the left inside the container */}
         <Container className="inset-0 pt-section lg:absolute lg:pt-0">
            <HeroSectionDetails />

            <div />
         </Container>

         {/* in small screens one column grid with the image */}
         {/* in large screens two columns grid with the image and an empty div to put the image on the right outside the container */}
         <div>
            <div className="hidden lg:block" />

            <HeroSectionImage />
         </div>
      </section>
   );
}

const HeroSectionDetails = () => {
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

const HeroSectionImage = () => (
   <figure
      className={cn(
         'flex max-w-screen-lg place-content-center overflow-hidden p-4',
         'lg:aspect-[7/6] lg:justify-end lg:p-0'
      )}
   >
      <img
         src="/images/about-side-image.png"
         alt="Happy shoppers with shopping bags"
         className={cn(
            'block rounded object-cover object-center',
            'lg:rounded-r-none [@media(min-width:2080px)]:rounded-r'
         )}
      />
   </figure>
);
