import { useEffect, useState } from 'react';

export type DateTime = {
   currentTime: string;
   currentDate: string;
};

export function useDateTime(): DateTime {
   const [currentTime, setCurrentTime] = useState('');
   const [currentDate, setCurrentDate] = useState('');

   useEffect(() => {
      const updateDateTime = () => {
         const now = new Date();
         setCurrentTime(
            now.toLocaleTimeString('en-US', {
               hour: '2-digit',
               minute: '2-digit',
               hour12: false,
            })
         );
         setCurrentDate(
            now.toLocaleDateString('en-US', {
               weekday: 'long',
               year: 'numeric',
               month: 'long',
               day: 'numeric',
            })
         );
      };

      updateDateTime();
      const timer = setInterval(updateDateTime, 1000);
      return () => clearInterval(timer);
   }, []);

   return { currentTime, currentDate };
}
