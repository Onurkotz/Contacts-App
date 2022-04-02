import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice/contactSlice";
import throttle from "lodash/throttle";
import { saveState, loadState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
