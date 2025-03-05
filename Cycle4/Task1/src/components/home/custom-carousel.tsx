import type React from 'react';

import {
   Carousel,
   CarouselContent,
   CarouselIndicator,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

type CustomCarouselProps<T> = {
   data: T[];
   renderItem: (item: T) => React.ReactNode;
   rows?: 1 | 2;
   className?: string;
   cols?: number;
   smallCols?: number;
   mediumCols?: number;
   largeCols?: number;
};

const SingleRowCarousel = <T,>({
   data,
   renderItem,
   cols,
   smallCols,
   mediumCols,
   largeCols,
}: CustomCarouselProps<T>) => (
   <CarouselContent>
      {data.map((item, index) => (
         <CarouselItem
            key={index}
            className={cn(
               'max-w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4',
               `basis-1/${cols} sm:basis-1/${smallCols} md:basis-1/${mediumCols} lg:basis-1/${largeCols}`
            )}
         >
            {renderItem(item)}
         </CarouselItem>
      ))}
   </CarouselContent>
);

const DoubleRowCarousel = <T,>({
   data,
   renderItem,
   cols,
   smallCols,
   mediumCols,
   largeCols,
}: CustomCarouselProps<T>) => (
   <CarouselContent>
      {/* the carousel Item will be two components stacking one top of the other */}
      {Array.from({ length: Math.ceil(data.length / 2) }).map(
         (_, slideIndex) => {
            // Calculate the index of the first item for the current slide
            const startIndex = slideIndex * 2;
            return (
               <CarouselItem
                  key={slideIndex}
                  className={cn(
                     'max-w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4',
                     `basis-1/${cols} sm:basis-1/${smallCols} md:basis-1/${mediumCols} lg:basis-1/${largeCols}`
                  )}
               >
                  <div className="grid grid-rows-2 gap-4">
                     {/* Render the first item if it exists */}
                     {startIndex < data.length && (
                        <div>{renderItem(data[startIndex])}</div>
                     )}

                     {/* Render the second item if it exists */}
                     {startIndex + 1 < data.length && (
                        <div>{renderItem(data[startIndex + 1])}</div>
                     )}
                  </div>
               </CarouselItem>
            );
         }
      )}
   </CarouselContent>
);

export default function CustomCarousel<T>({
   data,
   renderItem,
   rows = 1,
   className,
   cols = 1,
   smallCols = 2,
   mediumCols = 3,
   largeCols = 4,
}: CustomCarouselProps<T>) {
   return (
      <Carousel opts={{ align: 'start' }} className={className}>
         {rows === 1 ? (
            <SingleRowCarousel
               data={data}
               renderItem={renderItem}
               cols={cols}
               smallCols={smallCols}
               mediumCols={mediumCols}
               largeCols={largeCols}
            />
         ) : (
            <DoubleRowCarousel
               data={data}
               renderItem={renderItem}
               cols={cols}
               smallCols={smallCols}
               mediumCols={mediumCols}
               largeCols={largeCols}
            />
         )}

         <NavigationButtons />
         <CarouselIndicator className="sm:hidden" />
      </Carousel>
   );
}

const NavigationButtons = () => {
   return (
      <div
         className={cn(
            'absolute bottom-0 right-0 flex translate-y-2/3 gap-2 p-2',
            'sm:top-0 sm:h-fit sm:-translate-y-full'
         )}
      >
         <CarouselPrevious
            className={cn(
               // override the default styles
               'relative left-0 top-0 translate-x-0 translate-y-0 bg-card'
            )}
            variant="ghost"
         />

         <CarouselNext
            className={cn(
               // override the default styles
               'relative left-0 top-0 translate-x-0 translate-y-0 bg-card'
            )}
            variant="ghost"
         />
      </div>
   );
};
