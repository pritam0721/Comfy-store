import { useLoaderData } from 'react-router-dom';
import {
  ComplexPaginationContainer,
  OrderList,
  SectionTitle,
} from '../components';
import { customFetch } from '../utils';

export const ordersQuery = (params, user) => {
  return {
    queryKey: ['orders', user.name, params.page ? parseInt(params.page) : 1],
    queryFn: () =>
      customFetch.get('/orders', {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn('You must be logged in to before you checkout');
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      error?.response?.data?.error?.message ||
        'there was an error accessing your orders';

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');

      return null;
    }
  };
const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please Make An Oder' />;
  }
  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrderList />
      <ComplexPaginationContainer />
    </>
  );
};

export default Orders;
