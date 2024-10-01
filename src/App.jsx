import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Cart,
  Login,
  Register,
  SingleProduct,
  Products,
  Checkout,
  HomeLayout,
  Landing,
  Error,
  Orders,
} from './pages';
import { ErrorElement } from './components';

//* loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productsLoader } from './pages/Products';

//* actions

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);
const App = () => {
  return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
