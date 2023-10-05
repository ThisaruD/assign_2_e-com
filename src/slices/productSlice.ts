import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchProductById,
  fetchProductsByCategory,
  searchProducts,
} from "../actions/product-actions";
import { ProductState } from '../types/product';



const initialState: ProductState = {
  productList: [],
  loading: false,
  searchKeyword: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      console.log(action.payload.searchKeyword)
      state.searchKeyword = action.payload.searchKeyword;
    },
    removeSearchKeyword: (state) => { 
      state.searchKeyword=""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
      console.log("fetchAllProducts pending");
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productList = action.payload.products;
      state.loading = false;
      console.log("fetchAllProducts fulfilled");
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.loading = false;
      console.log("fetchAllProducts rejected");
    });

    //fetchProductById
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
      console.log("fetchProductById pending");
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      console.log("fetchProductById fulfilled", action.payload);
      state.productList = [action.payload];
      state.loading = false;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.loading = false;
      console.log("fetchProductById rejected");
    });

    //fetchProductByCategory
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.loading = true;
      console.log("fetchProductsByCategory pending");
    });
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      console.log("fetchProductsByCategory fulfilled", action.payload);
      state.productList = action.payload.products;
      state.loading = false;
    });
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.loading = false;
      console.log("fetchProductsByCategory rejected");
    });

    //search product by keyword
    builder.addCase(searchProducts.pending, (state) => {
      state.loading = true;
      console.log("fetchProductsByCategory pending");
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      console.log("fetchProductsByCategory fulfilled", action.payload);
      state.productList = action.payload.products;
      state.loading = false;
    });
    builder.addCase(searchProducts.rejected, (state) => {
      state.loading = false;
      console.log("fetchProductsByCategory rejected");
    });
  },
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
