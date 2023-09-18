import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { GET_CATEGORY_LIST_API } from '../constants/apiConstants';


export interface Category {
  category: string;
}

interface CategoryState {
  CategoryList: Category[];
}

const initialState: CategoryState = {
  CategoryList: [],
};

export const fetchCategory = createAsyncThunk(
  "category/fetch",
  async (thunkAPI) => {
    const response = await fetch(GET_CATEGORY_LIST_API);
    const data = response.json();
    console.log(data);
    return data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.CategoryList = action.payload;
    });
  },
});

export const categoryActions = categorySlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.category.categoryList;

export default categorySlice.reducer;
