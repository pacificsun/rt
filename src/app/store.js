import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        // Add other reducers here as needed
        // e.g., products: productsReducer,
    },
});