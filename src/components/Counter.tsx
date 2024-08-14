import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/Counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))} type="button">
          IncrementAsync
        </button>
        <button onClick={() => dispatch(increment())} type="button">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} type="button">
          Decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(10))} type="button">
          Decrement By Amount
        </button>
      </div>
    </div>
  );
}
