import { createBrowserRouter } from 'react-router-dom';

import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from '../pages';
import { QueryClient } from '@tanstack/react-query';
import { ErrorElement } from '../components';
// loaders
import { loader as landingLoader } from '../pages/Landing';
import { loader as singleProductLoader } from '../pages/SingleProduct';
import { loader as productsLoader } from '../pages/Products';
import { loader as checkoutLoader } from '../pages/Checkout';
import { loader as orderLoader } from '../pages/Orders';
// action
import { action as registerAction } from '../pages/Register';
import { action as loginAction } from '../pages/Login';
import { action as checkoutAction } from '../components/CheckoutFrom';
import { store } from '../store';
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100 * 60 * 50,
    },
  },
});
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: orderLoader(store, queryClient),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
