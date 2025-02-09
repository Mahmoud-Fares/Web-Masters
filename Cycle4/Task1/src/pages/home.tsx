import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export default function Home() {
   const navigate = useNavigate();

   return (
      <>
         <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button onClick={() => navigate('/product/1')}>
               Goto product page
            </Button>
         </div>
      </>
   );
}
