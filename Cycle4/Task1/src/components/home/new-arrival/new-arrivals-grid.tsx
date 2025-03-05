import { NEW_ARRIVALS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

import NewArrivalCard from './card/new-arrival-card';

export default function NewArrivalsGrid({ className }: { className?: string }) {
   return (
      // they will always be 4 products so we can use them individually
      // no need to use .map just for the sake of simplicity.
      <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', className)}>
         <NewArrivalCard product={NEW_ARRIVALS[0]} />

         <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <NewArrivalCard
               product={NEW_ARRIVALS[1]}
               variant="cover"
               size="small"
               className="col-span-2"
            />

            <NewArrivalCard product={NEW_ARRIVALS[2]} size="small" />
            <NewArrivalCard product={NEW_ARRIVALS[3]} size="small" />
         </div>
      </div>
   );
}
