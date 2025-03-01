import { CarouselApi } from '@/components/ui/carousel';
import { BANNER_ITEMS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

type CarouselDotsProps = {
   api: CarouselApi;
   current: number;
   setCurrent: React.Dispatch<React.SetStateAction<number>>;
};
export default function CarouselDots({
   api,
   current,
   setCurrent,
}: CarouselDotsProps) {
   return (
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
         {BANNER_ITEMS.map((_, index) => (
            <button
               key={index}
               onClick={() => {
                  api?.scrollTo(index);
                  setCurrent(index);
               }}
               className={cn(
                  'h-2.5 w-2.5 rounded-full bg-white/50 transition-colors',
                  current === index && 'bg-primary'
               )}
               aria-label={`Go to slide ${index + 1}`}
            />
         ))}
      </div>
   );
}
