import { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useUserStore } from '@/lib/stores/user-store';

import MainLayout from './main-layout';

export default function ProtectedLayout() {
   const currentUser = useUserStore((state) => state.currentUser);
   const navigate = useNavigate();

   useEffect(() => {
      if (!currentUser) {
         navigate('/login');
      }
   }, [currentUser, navigate]);

   if (!currentUser) {
      return null;
   }

   return (
      <MainLayout>
         <Outlet />
      </MainLayout>
   );
}
