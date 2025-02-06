import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './components/layout/main-layout';
import Home from './pages/home';
import NotFound from './pages/not-found';
import ProductPage from './pages/product-page';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
         {
            index: true,
            element: <Home />,
         },

         {
            path: 'product/:id',
            element: <ProductPage />,
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
