import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../reducers/loginSlice";
import dashBoardSlice from "../reducers/dashboardSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    dashboard: dashBoardSlice,
  },
  devTools: true,
});

export default store;
