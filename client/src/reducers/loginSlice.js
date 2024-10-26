import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/api";



const loginSlice = createSlice({
  initialState: {
    isAuthorized: false,
    status: "",
    userObj: null,
    error: null,
  },
  name: "login",
  reducers: {
    signIn: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload)
        state.status = "succeeded";
        state.userObj = action.payload.user;
        state.isAuthorized = true;
        state.error =null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload + new Date();
      });
  },
});

export default loginSlice.reducer;
