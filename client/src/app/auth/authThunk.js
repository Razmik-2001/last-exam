import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5000/api';

export const register = createAsyncThunk(
    'User/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API}/register`, formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Server Error');
        }
    }
);

export const login = createAsyncThunk(
    'User/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${API}/login`, formData);
            if(response.data && response.data.token){
                localStorage.setItem('token', response.data.token);
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Server Error');
        }
    }
)