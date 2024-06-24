import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../Redux/moviesSlice";

const MovieList = () => {
  const { movies } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({
    title: "",
    posterURL: "",
  });
  const onChangeHandler = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ marginTop: "50px" }}>
      {movies?.map((el) => (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(changeTitle({ movie: movie, id: el.id }));
            }}
          >
            <input type="text" name="title" onChange={onChangeHandler} /> <br />
            <input type="text" name="posterURL" onChange={onChangeHandler} />
            <br />
            <button type="submit">Change Name</button>
          </form>
          <p>{el.title}</p>
          <img src={el.posterURL} style={{ width: "250px", height: "280px" }} />
          <hr />
          <hr />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
