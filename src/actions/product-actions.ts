import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_PRODUCT_BY_CATEGORY, GET_PRODUCT_BY_ID, GET_PRODUCT_LIST_API, SEARCH_PRODUCTS } from '../constants/apiConstants';
import axios from 'axios';


export const fetchAllProducts = createAsyncThunk(
    "product/fetchAll",
    async (thunkAPI) => {
      const response = await axios.get(GET_PRODUCT_LIST_API);
      return response.data;
    }
);
  
export const fetchProductById = createAsyncThunk(
    "product/fetchById",
    async (productId: number, thunkAPI) => {
      const response = await axios.get(GET_PRODUCT_BY_ID + productId);
      return response.data;
    }
);
  
export const fetchProductsByCategory = createAsyncThunk(
    "product/fetchByCategory",
    async (selectedCategory: string, thunkAPI) => {
      const response = await axios.get(GET_PRODUCT_BY_CATEGORY + selectedCategory);
      return response.data;
    }
);
  
export const searchProducts = createAsyncThunk(
    "product/searchProducts",
    async (searchKeyword: string, thunkAPI) => {
      const response = await axios.get(SEARCH_PRODUCTS + searchKeyword);
      return response.data;
    }
  );