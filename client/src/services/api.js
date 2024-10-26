import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ENDPOINTS from "./apiConfig";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3001";

export const loginUser = createAsyncThunk(
  "data/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(ENDPOINTS.USER_LOGIN, credentials);
      return response.data;
    } catch (error) {    
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
