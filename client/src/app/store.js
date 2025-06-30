import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import productSlice from './product/productSlice';
import cartSlice from "./cart/cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productSlice,
        cart: cartSlice
    }
})
export default store;