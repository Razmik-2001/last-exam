import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5000/cart';

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({id, prod}, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(`${API}/addCart/${id}`, prod, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Server Error");
        }
    }
);

export const getAllCart = createAsyncThunk(
    "cart/getAllCart",
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`${API}/getAllCart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Server Error");
        }
    }
)

export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async (id, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(`${API}/deleteCart/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Server Error");
        }
    }
)


