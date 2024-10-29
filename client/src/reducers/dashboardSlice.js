import { createSlice } from "@reduxjs/toolkit";
import { addTask, getTasksList } from "../services/api";

const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: {
    taskList: [],
    loading: "",
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasksList.pending, (state) => {
        state.status = "pending";
        state.loading = true;
        state.error = null;
      })
      .addCase(getTasksList.fulfilled, (state, action) => {
        console.log(action);
        state.status = "success";
        state.loading = false;
        state.taskList = action.payload.taskList;
        state.error = null;
      })
      .addCase(getTasksList.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload?.message || "Internal Server Error";
      })

      .addCase(addTask.pending, (state) => {
        state.status = "pending";
        state.loading = true;
        state.error = null;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        console.log(action);
        state.status = "success";
        state.loading = false;
        state.taskList.push(action.payload.task);
        state.error = null;
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload?.message || "Internal Server Error";
      });
  },
});

export default dashBoardSlice.reducer;
