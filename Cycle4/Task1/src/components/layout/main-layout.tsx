import { Suspense } from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';

import CustomBreadcrumb from '@/components/breadcrumb/custom-breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Loader from '@/components/loader';

import Container from '../container';
import GoToTop from '../go-to-top';

export default function MainLayout({
   children,
}: {
   children?: React.ReactNode;
}) {
   return (
      <>
         <ScrollRestoration />
         <div className="flex min-h-screen flex-col">
            <Header />

            <Container>
               <CustomBreadcrumb className="pt-section" />
            </Container>

            <main className="flex flex-1 flex-col">
               <Suspense
                  fallback={
                     <Loader className="flex min-h-[70vh] flex-1 items-center justify-center" />
                  }
               >
                  {children ?? <Outlet />}
               </Suspense>
            </main>

            <Footer />
         </div>

         <GoToTop />
      </>
   );
}
