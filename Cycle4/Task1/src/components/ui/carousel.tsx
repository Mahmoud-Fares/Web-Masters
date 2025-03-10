import * as React from 'react';

import useEmblaCarousel, {
   type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
   opts?: CarouselOptions;
   plugins?: CarouselPlugin;
   orientation?: 'horizontal' | 'vertical';
   setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
   carouselRef: ReturnType<typeof useEmblaCarousel>[0];
   api: ReturnType<typeof useEmblaCarousel>[1];
   scrollPrev: () => void;
   scrollNext: () => void;
   canScrollPrev: boolean;
   canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
   const context = React.useContext(CarouselContext);

   if (!context) {
      throw new Error('useCarousel must be used within a <Carousel />');
   }

   return context;
}

const CarouselIndicator: React.FC<{
   className?: string;
   indicatorClassName?: string;
   activeIndicatorClassName?: string;
}> = ({ className, indicatorClassName, activeIndicatorClassName }) => {
   const { api } = useCarousel();
   const [currentIndex, setCurrentIndex] = React.useState(0);
   const [_windowSize, setWindowSize] = React.useState(window.innerWidth);

   React.useEffect(() => {
      const updateIndex = () => {
         if (api) {
            setCurrentIndex(api.selectedScrollSnap());
         }
      };

      if (api) {
         updateIndex(); // Set initial index
         api.on('select', updateIndex);
      }

      return () => {
         if (api) {
            api.off('select', updateIndex);
         }
      };
   }, [api]);

   // Debounce function to prevent multiple resize events from being triggered
   // for better performance
   const debounce = (func: Function, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return (...args: any[]) => {
         if (timeoutId) {
            clearTimeout(timeoutId);
         }
         timeoutId = setTimeout(() => {
            func(...args);
         }, delay);
      };
   };

   // this is used to update the number of indicators when the window is resized
   React.useEffect(() => {
      const handleResize = debounce(() => {
         setWindowSize(window.innerWidth);
      }, 100);

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const handleIndicatorClick = (index: number) => {
      api?.scrollTo(index);
   };

   const slidesCount = api?.scrollSnapList().length || 0;

   return (
      <div className={cn('mt-4 flex justify-center gap-2', className)}>
         {Array.from({ length: slidesCount }).map((_, index) => (
            <button
               key={index}
               className={cn(
                  'h-3 w-3 rounded-full bg-border transition-all duration-300',
                  indicatorClassName,
                  index === currentIndex &&
                     `bg-primary ${activeIndicatorClassName}`
               )}
               onClick={() => handleIndicatorClick(index)}
            />
         ))}
      </div>
   );
};

const Carousel = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
   (
      {
         orientation = 'horizontal',
         opts,
         setApi,
         plugins,
         className,
         children,
         ...props
      },
      ref
   ) => {
      const [carouselRef, api] = useEmblaCarousel(
         {
            ...opts,
            axis: orientation === 'horizontal' ? 'x' : 'y',
         },
         plugins
      );
      const [canScrollPrev, setCanScrollPrev] = React.useState(false);
      const [canScrollNext, setCanScrollNext] = React.useState(false);

      const onSelect = React.useCallback((api: CarouselApi) => {
         if (!api) {
            return;
         }

         setCanScrollPrev(api.canScrollPrev());
         setCanScrollNext(api.canScrollNext());
      }, []);

      const scrollPrev = React.useCallback(() => {
         api?.scrollPrev();
      }, [api]);

      const scrollNext = React.useCallback(() => {
         api?.scrollNext();
      }, [api]);

      const handleKeyDown = React.useCallback(
         (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'ArrowLeft') {
               event.preventDefault();
               scrollPrev();
            } else if (event.key === 'ArrowRight') {
               event.preventDefault();
               scrollNext();
            }
         },
         [scrollPrev, scrollNext]
      );

      React.useEffect(() => {
         if (!api || !setApi) {
            return;
         }

         setApi(api);
      }, [api, setApi]);

      React.useEffect(() => {
         if (!api) {
            return;
         }

         onSelect(api);
         api.on('reInit', onSelect);
         api.on('select', onSelect);

         return () => {
            api?.off('select', onSelect);
         };
      }, [api, onSelect]);

      return (
         <CarouselContext.Provider
            value={{
               carouselRef,
               api: api,
               opts,
               orientation:
                  orientation ||
                  (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
               scrollPrev,
               scrollNext,
               canScrollPrev,
               canScrollNext,
            }}
         >
            <div
               ref={ref}
               onKeyDownCapture={handleKeyDown}
               className={cn('relative', className)}
               role="region"
               aria-roledescription="carousel"
               {...props}
            >
               {children}
            </div>
         </CarouselContext.Provider>
      );
   }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
   const { carouselRef, orientation } = useCarousel();

   return (
      <div ref={carouselRef} className="overflow-hidden">
         <div
            ref={ref}
            className={cn(
               'flex',
               orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
               className
            )}
            {...props}
         />
      </div>
   );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
   const { orientation } = useCarousel();

   return (
      <div
         ref={ref}
         role="group"
         aria-roledescription="slide"
         className={cn(
            'min-w-0 shrink-0 grow-0 basis-full',
            orientation === 'horizontal' ? 'pl-4' : 'pt-4',
            className
         )}
         {...props}
      />
   );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
   HTMLButtonElement,
   React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
   const { orientation, scrollPrev, canScrollPrev, api } = useCarousel();
   const slidesCount = api?.scrollSnapList().length || 0;

   return (
      <Button
         ref={ref}
         variant={variant}
         size={size}
         className={cn(
            'absolute h-8 w-8 rounded-full',
            orientation === 'horizontal'
               ? '-left-12 top-1/2 -translate-y-1/2'
               : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
            className,
            // hide the previous button if there is only one slide
            slidesCount === 1 && 'hidden'
         )}
         disabled={!canScrollPrev}
         onClick={scrollPrev}
         {...props}
      >
         <ArrowLeft className="h-4 w-4" />
         <span className="sr-only">Previous slide</span>
      </Button>
   );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
   HTMLButtonElement,
   React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
   const { orientation, scrollNext, canScrollNext, api } = useCarousel();
   const slidesCount = api?.scrollSnapList().length || 0;

   return (
      <Button
         ref={ref}
         variant={variant}
         size={size}
         className={cn(
            'absolute h-8 w-8 rounded-full',
            orientation === 'horizontal'
               ? '-right-12 top-1/2 -translate-y-1/2'
               : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
            className,
            // hide the next button if there is only one slide
            slidesCount === 1 && 'hidden'
         )}
         disabled={!canScrollNext}
         onClick={scrollNext}
         {...props}
      >
         <ArrowRight className="h-4 w-4" />
         <span className="sr-only">Next slide</span>
      </Button>
   );
});
CarouselNext.displayName = 'CarouselNext';

export {
   Carousel,
   CarouselContent,
   CarouselIndicator,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
   type CarouselApi,
};
