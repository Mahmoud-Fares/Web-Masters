import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useUserStore } from '@/lib/stores/user-store';

export default function Home() {
   const navigate = useNavigate();

   const currentUser = useUserStore((state) => state.currentUser);
   const logout = useUserStore((state) => state.logout);

   return (
      <>
         <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8">
            <h1 className="text-3xl font-bold underline">
               Hello {currentUser?.firstName ?? 'there!'}👋
            </h1>
            <Button onClick={() => navigate('/about')}>Goto about page</Button>
            <Button onClick={() => logout()}>Logout</Button>
         </div>
      </>
   );
}
