import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userItemsReducer from "../features/useritems/userItemsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userItems: userItemsReducer,
  },
});
