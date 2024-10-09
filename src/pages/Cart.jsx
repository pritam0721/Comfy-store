import { useSelector } from 'react-redux';
import { CartItemList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';
const Cart = () => {
  //temp
  const user = null;
  const numItemsCart = useSelector((state) => state.cartState.numItemsCart);
  if (numItemsCart === 0) {
    return <SectionTitle text='you cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemList />
        </div>
        <div className='lg:col-span-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
