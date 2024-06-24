import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const movieSlice = createSlice({
  name: "movies",
  initialState: { movies: data },
  reducers: {
    changeTitle: (state, { payload }) => {
      state.movies = state.movies.map((movie) =>
        movie.id === payload.id ? (movie = payload.movie) : movie
      );
    },
  },
});

export default movieSlice.reducer;
export const { changeTitle } = movieSlice.actions;
