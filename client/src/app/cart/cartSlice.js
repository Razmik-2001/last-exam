import {createSlice} from "@reduxjs/toolkit";
import {addToCart, getAllCart} from "./cartThunk";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: null,
        loading: false,
        error: null,
        message: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.message = action.payload.message;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = '';
            })

            .addCase(getAllCart.pending, (state, action) => {
                state.cart = null;
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(getAllCart.fulfilled, (state, action) => {
                state.cart = action.payload.cart;
                state.loading = false;
                state.error = null;
                state.message = action.payload.message;
            })
            .addCase(getAllCart.rejected, (state, action) => {
                state.cart = null;
                state.loading = false;
                state.error = action.payload;
                state.message = '';
            })
    }
})

export default cartSlice.reducer;