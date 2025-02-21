import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@/components/error-boundary';
import { AuthLayout } from '@/components/layout/auth-layout';
import MainLayout from '@/components/layout/main-layout';
import ProtectedLayout from '@/components/layout/protected-layout';
import AboutPage from '@/pages/about';
import AccountPage from '@/pages/account';
import BillingPage from '@/pages/billing';
import CartPage from '@/pages/cart';
import ContactPage from '@/pages/contact';
import Home from '@/pages/home';
import LoginPage from '@/pages/login';
import NotFound from '@/pages/not-found';
import ProductPage from '@/pages/product-page';
import SignUpPage from '@/pages/signup';
import WishlistPage from '@/pages/wishlist';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
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
   // Protected routes group
   {
      path: '/',
      element: <ProtectedLayout />,
      errorElement: <ErrorBoundary />,
      children: [
         {
            path: 'cart',
            element: <CartPage />,
         },
         {
            path: 'billing',
            element: <BillingPage />,
         },
         {
            path: 'account',
            element: <AccountPage />,
         },
         {
            path: 'wishlist',
            element: <WishlistPage />,
         },
      ],
   },
   // Auth routes group
   {
      path: '/',
      element: <AuthLayout />,
      errorElement: <ErrorBoundary />,
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
