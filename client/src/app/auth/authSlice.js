import {createSlice} from "@reduxjs/toolkit";
import {register, login} from "./authThunk";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        message: "",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // register
            .addCase(register.pending, (state, action) => {
                state.loading = true;
                state.message = "";
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.message = action.payload.message;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.message = '';
                state.error = action.payload;
            })

            //login

            .addCase(login.pending, (state, action) => {
                state.user = null;
                state.loading = true;
                state.message = "";
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.loading = false;
                state.message = action.payload.message;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.user = null;
                state.loading = false;
                state.message = '';
                state.error = action.payload;
            })

    }
})

export default authSlice.reducer;