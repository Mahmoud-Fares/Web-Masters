import { Outlet, ScrollRestoration } from 'react-router-dom';

import CustomBreadcrumb from '@/components/breadcrumb/custom-breadcrumb';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

import Container from '../container';

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
               {children ?? <Outlet />}
            </main>

            <Footer />
         </div>
      </>
   );
}
