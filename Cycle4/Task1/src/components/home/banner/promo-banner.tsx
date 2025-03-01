import Autoplay from 'embla-carousel-autoplay';

import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from '@/components/ui/carousel';
import { BANNER_ITEMS } from '@/lib/mock-data';

import { BannerItem } from './banner-item';

export default function PromoBanner({ className }: { className?: string }) {
   return (
      <Carousel className={className} plugins={[Autoplay({ delay: 5000 })]}>
         <CarouselContent>
            {BANNER_ITEMS.map((item) => (
               <CarouselItem key={item.id}>
                  <BannerItem item={item} />
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   );
}
