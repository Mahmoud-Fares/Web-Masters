import React from 'react';

import { useTimer } from 'react-timer-hook';

import { cn } from '@/lib/utils';

export function FourDaysTimer({ className }: { className?: string }) {
   const expiryTimestamp = new Date();
   expiryTimestamp.setDate(expiryTimestamp.getDate() + 4);
   const { seconds, minutes, hours, days } = useTimer({
      expiryTimestamp: expiryTimestamp,
   });

   const timer = [
      { label: 'Days', value: days },
      { label: 'Hours', value: hours },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds },
   ];

   return (
      <div
         className={cn(
            'flex flex-wrap justify-center gap-4 font-bold antialiased',
            className
         )}
      >
         {timer.map(({ label, value }, index) => (
            <React.Fragment key={label}>
               <div className="flex flex-col items-start justify-center *:-mt-0.5">
                  <span className="text-xs font-medium">{label}</span>
                  <div className="text-3xl">
                     {value.toString().padStart(2, '0')}
                  </div>
               </div>

               {index !== timer.length - 1 && (
                  <span className="pt-2 text-2xl text-primary-hover">:</span>
               )}
            </React.Fragment>
         ))}
      </div>
   );
}
