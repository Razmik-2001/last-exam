import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5000/product';

export const addProduct = createAsyncThunk(
    "product",
    async (data, {rejectWithValue}) => {
        const token = localStorage.getItem("token");
        try{
            const response = await axios.post(`${API}/addProduct`, data , {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response?.data?.message || 'Server Error');
        }
    }
)

export const getAllProducts = createAsyncThunk(
    "get/product",
    async (_, {rejectWithValue}) => {
        try{
            const response = await axios.get(`${API}/getProducts`);
            return response.data;
        }catch(error){
            return rejectWithValue(error.response?.data?.message || 'Server Error');
        }
    }
)