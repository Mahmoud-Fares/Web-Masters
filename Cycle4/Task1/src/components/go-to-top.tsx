import { useEffect, useState } from 'react';

import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function GoToTop() {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      if (window.scrollY > 300) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <>
         {isVisible && (
            <Button
               onClick={scrollToTop}
               variant="ghost"
               size="icon"
               className="fixed bottom-5 right-5 aspect-square h-10 w-10 rounded-full bg-card"
            >
               <ArrowUp className="h-6 w-6" />
            </Button>
         )}
      </>
   );
}
