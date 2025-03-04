import Autoplay from 'embla-carousel-autoplay';

import {
   Carousel,
   CarouselContent,
   CarouselIndicator,
   CarouselItem,
} from '@/components/ui/carousel';
import { BANNER_ITEMS } from '@/lib/mock-data';

import { BannerItem } from './banner-item';

export default function PromoBanner({ className }: { className?: string }) {
   return (
      <Carousel className={className} plugins={[Autoplay({ delay: 5000 })]}>
         <div className="relative">
            <CarouselContent>
               {BANNER_ITEMS.map((item) => (
                  <CarouselItem key={item.id} className="bg-black">
                     <BannerItem item={item} />
                  </CarouselItem>
               ))}
            </CarouselContent>

            <CarouselIndicator
               className="absolute bottom-4 left-1/2 -translate-x-1/2 transform"
               indicatorClassName="h-2.5 w-2.5 bg-white/50"
            />
         </div>
      </Carousel>
   );
}
