import { createAsyncThunk } from "@reduxjs/toolkit";

import { GET_CATEGORY_LIST_API } from "../constants/apiConstants";

 export const fetchCategory = createAsyncThunk(
  "category/fetch",
  async (thunkAPI) => {
    const response = await fetch(GET_CATEGORY_LIST_API);
    const data = response.json();
    console.log(data);
    return data;
  }
);


