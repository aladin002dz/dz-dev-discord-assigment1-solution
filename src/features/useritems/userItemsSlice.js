import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userItemsService from "./userService";
const initialState = {
  useritems: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

//Get user items
export const getUserItems = createAsyncThunk(
  "userItems/getAll",
  async (_, thunkAPI) => {
    try {
      return await userItemsService.getUserItems();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userItemsSlice = createSlice({
  name: "useritems",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = userItemsSlice.actions;
export default userItemsSlice.reducer;
