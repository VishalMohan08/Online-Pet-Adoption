import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    userName: localStorage.getItem('userName') || null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = { userName: action.payload };
      localStorage.setItem('userName', action.payload);
    },
    logout: (state) => {
      state.user = { userName: null };
      localStorage.removeItem('userName');
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice;