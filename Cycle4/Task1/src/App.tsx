import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/components/layout/main-layout';
import AboutPage from '@/pages/about';
import ContactPage from '@/pages/contact';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import ProductPage from '@/pages/product-page';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: 'product/:id',
            element: <ProductPage />,
         },
         {
            path: 'contact',
            element: <ContactPage />,
         },
         {
            path: 'about',
            element: <AboutPage />,
         },
         {
            path: '*',
            element: <NotFound />,
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
