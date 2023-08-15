import { configureStore } from '@reduxjs/toolkit';
import { slice as CartSlice } from './CartSlice';

const store = configureStore({ reducer: CartSlice.reducer })
export default store;