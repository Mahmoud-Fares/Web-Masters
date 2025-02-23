import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useUserStore } from '@/lib/stores/user-store';

export function AuthLayout() {
   const currentUser = useUserStore((state) => state.currentUser);
   const navigate = useNavigate();

   useEffect(() => {
      if (currentUser) navigate('/');
   }, [currentUser, navigate]);

   return (
      <div className="flex min-h-screen py-section">
         {/* Left side - Image */}
         <div className="hidden w-1/2 lg:block">
            <img
               src="/images/auth-image.png"
               alt="Shopping cart with phone"
               className="block h-full rounded"
            />
         </div>

         {/* Right side - Form */}
         <div className="flex w-full flex-col justify-center p-8 lg:w-1/2">
            <div className="mx-auto w-full max-w-md xl:max-w-lg">
               <Outlet />
            </div>
         </div>
      </div>
   );
}
