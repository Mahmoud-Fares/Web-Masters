import { useEffect, useState } from 'react';

const breakpoints = {
   small: 0,
   medium: 640,
   large: 768,
   xlarge: 1024,
};

const useWindow = () => {
   const [windowSize, setWindowSize] = useState<
      'small' | 'medium' | 'large' | 'xlarge'
   >('small');

   const handleResize = () => {
      const width = window.innerWidth;
      if (width >= breakpoints.xlarge) {
         setWindowSize('xlarge');
      } else if (width >= breakpoints.large) {
         setWindowSize('large');
      } else if (width >= breakpoints.medium) {
         setWindowSize('medium');
      } else {
         setWindowSize('small');
      }
   };

   useEffect(() => {
      handleResize(); // Set initial size
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return windowSize;
};

export default useWindow;
