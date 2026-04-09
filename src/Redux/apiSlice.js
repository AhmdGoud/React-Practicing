import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchedData = createAsyncThunk("theStateIs", async () => {
  // 'theStateIs' it's a prefix for => pending or fulfilled or rejected staus
  const url =
    "https://islamicapi.com/api/v1/prayer-time/?lat=25.204849&lon=55.270782&method=3&school=1&api_key=7eF1cIkNjibckJQx5I939BpwiPNL5cvwlEbmu0RAysd6jRQF";

  const theData = await fetch(url);
  const data = await theData.json();

  return data.data.date; // this value is stored in the action.payload automatically
});
export { fetchedData };

const apiSlice = createSlice({
  name: "api Slice",
  initialState: { api: {}, status: "" },

  extraReducers(builder) {
    builder
      .addCase(fetchedData.pending, (state) => {
        state.status = "status is pending";
      })
      .addCase(fetchedData.fulfilled, (state, action) => {
        state.api = action.payload;
      });
  },
});

export default apiSlice.reducer;
