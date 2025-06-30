import {createSlice} from "@reduxjs/toolkit";
import {addProduct, getAllProducts} from "./productThunk";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        allProducts: null,
        loading: false,
        error: null,
        message: ''
    },
    reducers: {
        removeMessage: (state, action) => {
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.message = '';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.message = action.payload.message;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = '';
            })

            // getProducts

            .addCase(getAllProducts.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.message = '';
                state.allProducts = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.allProducts = action.payload.allProducts;
                state.error = null;
                state.message = action.payload.message;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.message = '';
                state.allProducts = null;
            })
    }
})

export const {removeMessage} = productSlice.actions;
export default productSlice.reducer;