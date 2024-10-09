import { configureStore } from '@reduxjs/toolkit';

import carReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cartState: carReducer,
  },
});
