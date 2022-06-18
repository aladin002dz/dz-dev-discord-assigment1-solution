import { createSlice, createAsynchThunk } from "@reduxjs/toolkit";

const initialState = {
  useritems: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

const userItemsSlice = createSlice({
  name: "useritems",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = userItemsSlice.actions;
export default userItemsSlice.reducer;
