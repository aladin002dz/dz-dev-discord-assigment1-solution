import { configureStore } from "@reduxjs/toolkit";
import userItemsReducer from "../features/useritems/userItemsSlice";

export const store = configureStore({
  reducer: {
    userItems: userItemsReducer,
  },
});
