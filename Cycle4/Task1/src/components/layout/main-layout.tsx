import { Outlet } from 'react-router-dom';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

export default function MainLayout({
   children,
}: {
   children?: React.ReactNode;
}) {
   return (
      <div className="flex min-h-screen flex-col">
         <Header />

         <main className="flex flex-1 flex-col">{children ?? <Outlet />}</main>

         <Footer />
      </div>
   );
}
