import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; 

export const fetchApi = createAsyncThunk("fetchApi", async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const Api = createSlice({
  name: "Api",
  initialState: { data: [], loading: true },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default Api.reducer;
