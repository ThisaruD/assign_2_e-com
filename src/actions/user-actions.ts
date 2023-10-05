import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_LOGIN_API } from '../constants/apiConstants';

export const userLogin = createAsyncThunk(
    "user/login",
    async (userData: object, thunkAPI) => {
      const response = await axios.post(USER_LOGIN_API, userData);
      //const data = await response();
      console.log(response);
      console.log("login");
      return response.data;
    }
  );