import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  return (
    <h1 className='text-3xl'>
      {cartItems.map((item) => {
        return <CartItem key={item.cartId} cartItem={item} />;
      })}
    </h1>
  );
};

export default CartItemList;
