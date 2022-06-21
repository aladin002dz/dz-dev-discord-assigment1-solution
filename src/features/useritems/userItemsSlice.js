import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userItemsService from "./userService";

const initialState = {
  userItems: [],
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
      const token = thunkAPI.getState().auth.user.token;
      return await userItemsService.getUserItems(token);
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

// Delete user goal
export const deleteUserItem = createAsyncThunk(
  "userItems/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await userItemsService.deleteUserItem(id, token);
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
  name: "userItems",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userItems = action.payload;
      })
      .addCase(getUserItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteUserItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userItems = state.userItems.filter(
          (userItem) => userItem.id !== action.payload.id
        );
      })
      .addCase(deleteUserItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = userItemsSlice.actions;
export default userItemsSlice.reducer;
