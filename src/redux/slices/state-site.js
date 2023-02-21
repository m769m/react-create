import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../services/index";

const initialState = {
  siteState: {},
};

export const getSiteState = createAsyncThunk("getSiteState/fetchState", async () => {
  const { data } = await axios.get("/state");
  return data;
});

export const siteState = createSlice({
  name: "stateSite",
  initialState,
  reducers: {
    saveStateSite: (state, action) => {
      state.siteState = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getSiteState.fulfilled, (state, action) => {
      state.siteState = action.payload;
    });
  },
});

export const { saveStateSite } = siteState.actions;
export default siteState.reducer;
