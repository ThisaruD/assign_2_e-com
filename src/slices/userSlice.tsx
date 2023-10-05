import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../actions/user-actions";

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface userState {
  userData: User;
  loading: boolean;
  isLogged: boolean;
}

const initialState: userState = {
  userData: {
    id: 0,
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
  },
  loading: false,
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userData = {
        id: 0,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
      };
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      console.log("userLogin pending");
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.isLogged = true;
      console.log("userLogin fulfilled");
    });
    builder.addCase(userLogin.rejected, (state) => {
      state.loading = false;
      console.log("userLogin rejected");
    });
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
