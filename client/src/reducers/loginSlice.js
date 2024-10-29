import { createSlice } from "@reduxjs/toolkit";
import { loginUser, RegisterUser } from "../services/api";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isAuthorized: false,
    status: "",
    userObj: null,
    error: null,
  },
  reducers: {
    resetState: (state) => {
      state.status = "";
      state.error = null;
      state.isAuthorized = false;
      state.userObj = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error on a new login attempt
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userObj = action.payload.user;
        state.isAuthorized = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Login failed";
      })

      .addCase(RegisterUser.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error when starting a new request
      })
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userObj = action.payload.user;
        state.isAuthorized = true;
        state.error = null; // Clear error on successful registration
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Registration failed";
      });
  },
});

export const { resetState } = loginSlice.actions;
export default loginSlice.reducer;
