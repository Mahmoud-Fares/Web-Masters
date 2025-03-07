import { useTimer } from 'react-timer-hook';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function MusicHeroDetails() {
   return (
      <div className="flex max-w-full flex-col gap-4">
         <h2 className="font-semibold capitalize text-success">categories</h2>
         <p className="max-w-[16ch] text-5xl font-semibold leading-tight">
            Enhance Your Music Experience
         </p>

         <SixDaysTimer />

         <Button className="w-fit rounded bg-success px-12 capitalize text-white hover:bg-success/80">
            buy Now
         </Button>
      </div>
   );
}

function SixDaysTimer({ className }: { className?: string }) {
   const expiryTimestamp = new Date();
   expiryTimestamp.setDate(expiryTimestamp.getDate() + 6);
   const { seconds, minutes, hours, days } = useTimer({
      expiryTimestamp: expiryTimestamp,
   });

   const timer = [
      { label: 'Hours', value: hours },
      { label: 'Days', value: days },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds },
   ];

   return (
      <div className={cn('my-6 flex flex-wrap gap-4', className)}>
         {timer.map(({ label, value }) => (
            <div
               key={label}
               className="flex aspect-square w-full max-w-[4.5rem] flex-col items-center justify-center rounded-full bg-white p-2 text-black *:-mb-0.5"
            >
               <div className="text-xl font-bold antialiased">
                  {value.toString().padStart(2, '0')}
               </div>
               <span className="text-xs">{label}</span>
            </div>
         ))}
      </div>
   );
}
