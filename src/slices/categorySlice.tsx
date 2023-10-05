import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCategory } from "../actions/category-actions";
import { CategoryState } from "../types/category";

const initialState: CategoryState = {
  CategoryList: [],
  selectedCategory: "",
};

export const categorySlice = createSlice({
  name: "category1",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      console.log("category selected");
      state.selectedCategory = action.payload;
    },
    removeSelectedCategory: (state) => {
      state.selectedCategory = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.CategoryList = action.payload;
    });
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
