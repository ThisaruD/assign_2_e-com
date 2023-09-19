import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_PRODUCT_LIST_API } from '../constants/apiConstants';

export interface Product { 
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[],
}

interface ProductState { 
  productList: Product[];
  loading: boolean;
}

const initialState: ProductState = {
  productList: [],
  loading: false, // Set initial loading state to false
}

export const fetchProducts = createAsyncThunk(
  "product/fetch",
  async (thunkAPI) => {
    const response = await fetch(GET_PRODUCT_LIST_API);
      const data = await response.json();  // Await for JSON parsing
      console.log(data)
    return data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      // Set loading to true when the fetch is pending
        state.loading = true;
        console.log("pending")
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload.products;
        state.loading = false; // Set loading to false when the fetch is successful
        console.log("fulfilled")
    });
    builder.addCase(fetchProducts.rejected, (state) => {
        state.loading = false; // Set loading to false when the fetch is rejected
        console.log("rejected")
    });
  },
});

export const categoryActions = productSlice.actions;

export default productSlice.reducer;
