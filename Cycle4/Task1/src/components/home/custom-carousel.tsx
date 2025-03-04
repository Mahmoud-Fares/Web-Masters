import { useEffect, useMemo, useState } from 'react';

import {
   Carousel,
   CarouselContent,
   CarouselIndicator,
   CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type CustomCarouselProps<T> = {
   data: T[];
   renderItem: (item: T) => React.ReactNode;
   rows?: 1 | 2;
};

/**
 * CustomCarousel Component
 *
 * This responsive carousel dynamically adjusts the number of items per slide
 * based on screen width and supports 1 or 2 rows (with 2 rows only applying on `sm` screens and above).
 *
 * ### Responsive Behavior
 * | Screen Size    | Columns | Rows                         | Items Per Slide |
 * |----------------|---------|------------------------------|-----------------|
 * | `sm` (mobile)  | 1       | 1 _(always)_                 | 1               |
 * | `md` (tablet)  | 2       | 1 or 2 _(depends on `rows`)_ | 2 or 4          |
 * | `lg` (laptop)  | 3       | 1 or 2 _(depends on `rows`)_ | 3 or 6          |
 * | `xl` (desktop) | 4       | 1 or 2 _(depends on `rows`)_ | 4 or 8          |
 * |----------------|---------|------------------------------|-----------------|
 *
 */

export default function CustomCarousel<T>({
   data,
   renderItem,
   rows = 1,
}: CustomCarouselProps<T>) {
   const [itemsPerSlide, setItemsPerSlide] = useState(1);

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         let columns = 1;

         if (width >= 1280) {
            columns = 4; // xl:grid-cols-4
         } else if (width >= 1024) {
            columns = 3; // lg:grid-cols-3
         } else if (width >= 640) {
            columns = 2; // sm:grid-cols-2
         }

         // Apply two rows only for sm screens and above
         const effectiveRows = width >= 640 && rows === 2 ? 2 : 1;
         setItemsPerSlide(columns * effectiveRows);
      };

      handleResize(); // Set initial width
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [rows]);

   // Memoize slide calculations for satisfying the rules of hook
   const slides = useMemo(() => {
      const chunkedSlides: T[][] = [];
      for (let i = 0; i < data.length; i += itemsPerSlide) {
         chunkedSlides.push(data.slice(i, i + itemsPerSlide));
      }
      return chunkedSlides;
   }, [data, itemsPerSlide]);

   return (
      <Carousel>
         <CarouselContent>
            {slides.map((slide, index) => (
               <CarouselItem key={index}>
                  <div
                     className={cn(
                        'grid grid-cols-1 gap-4',
                        'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
                        rows === 2 && 'sm:grid-rows-2'
                     )}
                  >
                     {slide.map((item, itemIndex) => (
                        <div key={itemIndex}>{renderItem(item)}</div>
                     ))}
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>

         <CarouselIndicator />
      </Carousel>
   );
}
