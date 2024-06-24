import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./Redux/counterSlice";
import MovieList from "./Components/MovieList";

const App = () => {
  const { count } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const [num, setNum] = useState("");
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  const AddAmountHandler = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(num));
    setNum("");
  };
  const MinusAmountHandler = (e) => {
    e.preventDefault();
    dispatch(decrementByAmount(num));
    setNum("");
  };

  return (
    <div>
      Hello,The value is {count}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <div>
        <form>
          <label> Amount :</label>
          <input
            type="text"
            name="amount"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />

          <button type="submit" onClick={AddAmountHandler}>
            Add
          </button>
          <button type="submit" onClick={MinusAmountHandler}>
            Minus
          </button>
        </form>
      </div>
      <MovieList />
    </div>
  );
};

export default App;
