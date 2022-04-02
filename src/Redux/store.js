import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice/contactSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});