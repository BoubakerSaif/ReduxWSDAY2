import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: { count: counterSlice, movie: moviesSlice },
});

export default store;
