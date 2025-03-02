import { useEffect, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';

import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
} from '@/components/ui/carousel';
import { BANNER_ITEMS } from '@/lib/mock-data';

import { BannerItem } from './banner-item';
import CarouselDots from './components/carousel-dots';

export default function PromoBanner({ className }: { className?: string }) {
   const [api, setApi] = useState<CarouselApi>();
   const [current, setCurrent] = useState(0);
   useEffect(() => {
      if (!api) {
         return;
      }

      api.on('select', () => {
         setCurrent(api.selectedScrollSnap());
      });
   }, [api]);

   return (
      <Carousel
         className={className}
         plugins={[Autoplay({ delay: 5000 })]}
         setApi={setApi}
      >
         <div className="relative">
            <CarouselContent>
               {BANNER_ITEMS.map((item) => (
                  <CarouselItem key={item.id} className="bg-black">
                     <BannerItem item={item} />
                  </CarouselItem>
               ))}
            </CarouselContent>

            <CarouselDots api={api} current={current} setCurrent={setCurrent} />
         </div>
      </Carousel>
   );
}
