import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ENDPOINTS from "./apiConfig";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3001";

export const loginUser = createAsyncThunk(
  "data/loginUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(ENDPOINTS.USER_LOGIN, payload, { withCredentials: true });
      return response.data;
    } catch (error) {    
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const RegisterUser = createAsyncThunk(
  "data/registerUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(ENDPOINTS.USER_REGISTER, payload, { withCredentials: true });
      return response.data;
    } catch (error) {    
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getTasksList = createAsyncThunk(
  "data/taskLists",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(ENDPOINTS.TASK_LIST, payload);
      console.log(response)
      return response.data;
    } catch (error) {    
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "data/addTask",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(ENDPOINTS.TASK_ADD, payload, { withCredentials: true });
      console.log(response)
      return response.data;
    } catch (error) {    
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
