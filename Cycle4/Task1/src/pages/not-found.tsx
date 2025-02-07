import { NavLink } from 'react-router-dom';

import Container from '@/components/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
   return (
      <Container className="flex flex-1 flex-col justify-center gap-6 py-12 text-center">
         <h1 className="text-[80px] font-medium tracking-wide text-foreground">
            404 Not Found
         </h1>

         <p className="text-text2">
            Your visited page not found. You may go home page.
         </p>

         <div className="pt-8">
            <NavLink to="/">
               <Button className="h-auto rounded px-10 py-4 text-base">
                  Back to home page
               </Button>
            </NavLink>
         </div>
      </Container>
   );
}
