import { Suspense, lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@/components/error-boundary';
import { AuthLayout } from '@/components/layout/auth-layout';
import MainLayout from '@/components/layout/main-layout';
import ProtectedLayout from '@/components/layout/protected-layout';
import Loader from '@/components/loader';

const AboutPage = lazy(() => import('@/pages/about'));
const AccountPage = lazy(() => import('@/pages/account'));
const CartPage = lazy(() => import('@/pages/cart'));
const CheckoutPage = lazy(() => import('@/pages/checkout'));
const ContactPage = lazy(() => import('@/pages/contact'));
const Home = lazy(() => import('@/pages/home'));
const LoginPage = lazy(() => import('@/pages/login'));
const NotFound = lazy(() => import('@/pages/not-found'));
const ProductPage = lazy(() => import('@/pages/product-page'));
const SignUpPage = lazy(() => import('@/pages/signup'));
const WishlistPage = lazy(() => import('@/pages/wishlist'));

export const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <Suspense fallback={<Loader />}>
            <MainLayout />
         </Suspense>
      ),
      errorElement: <ErrorBoundary />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: 'product/:slug',
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
      element: (
         <Suspense fallback={<Loader />}>
            <ProtectedLayout />
         </Suspense>
      ),
      errorElement: <ErrorBoundary />,
      children: [
         {
            path: 'cart',
            element: <CartPage />,
         },
         {
            path: 'cart/checkout',
            element: <CheckoutPage />,
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
      element: (
         <Suspense fallback={<Loader />}>
            <AuthLayout />
         </Suspense>
      ),
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
