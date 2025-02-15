import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { AuthLayout } from '@/components/layout/auth-layout';
import MainLayout from '@/components/layout/main-layout';
import AboutPage from '@/pages/about';
import BillingPage from '@/pages/billing';
import CartPage from '@/pages/cart';
import ContactPage from '@/pages/contact';
import Home from '@/pages/home';
import LoginPage from '@/pages/login';
import NotFound from '@/pages/not-found';
import ProductPage from '@/pages/product-page';
import SignUpPage from '@/pages/signup';

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
            path: 'cart',
            element: <CartPage />,
         },
         {
            path: 'billing',
            element: <BillingPage />,
         },
         {
            path: '*',
            element: <NotFound />,
         },
      ],
   },
   {
      path: '/',
      element: <AuthLayout />,
      children: [
         {
            path: 'signup',
            element: <SignUpPage />,
         },
         {
            path: 'login',
            element: <LoginPage />,
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
