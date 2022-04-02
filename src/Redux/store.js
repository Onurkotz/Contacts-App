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


/// Please note that we have throttled the function calls here. This is because if your state is updated many times within a second, localStorage will be updated too many time. To avoid this install lodash. Here, we have throttled the function calls to 1 sec so that saveState is called only once per second.