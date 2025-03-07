import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { useUserStore } from '@/stores/user-store';

import MainLayout from './main-layout';

export function AuthLayout() {
   const currentUser = useUserStore((state) => state.currentUser);
   const navigate = useNavigate();

   useEffect(() => {
      if (currentUser) navigate('/');
   }, [currentUser, navigate]);

   return (
      <MainLayout>
         <div className="mb-section flex flex-1 py-section xl:gap-section">
            <AuthImage className="hidden basis-1/2 lg:flex" />

            <AuthFormWrapper className="flex w-full flex-col items-center justify-center lg:basis-1/2 xl:items-start" />
         </div>
      </MainLayout>
   );
}

function AuthImage({ className }: { className?: string }) {
   return (
      <figure className={cn(className)}>
         <img
            src="/images/auth-image.png"
            alt="Shopping cart with phone"
            className="block h-full w-full rounded-r"
         />
      </figure>
   );
}

function AuthFormWrapper({ className }: { className?: string }) {
   return (
      <div className={cn('p-8', className)}>
         <div className="w-full max-w-md xl:max-w-screen-lg">
            <Outlet />
         </div>
      </div>
   );
}
