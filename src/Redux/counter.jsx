import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slice";
import { fetchedData } from "./apiSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const theApi = useSelector((state) => state.apiData.api);
  const theStatus = useSelector((state) => state.apiData.status);

  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button
        onClick={() => {
          dispatch(fetchedData());
          console.log(theStatus, theApi);
        }}
      >
        =
      </button>
    </div>
  );

  // whenever an action is dispatched Redux calls the counterReducer
}
export default Counter;

// Why we write state.counter.value

// Because Redux state now looks like:

// state
//  └── counter
//       └── value

// So in React Redux we access it like this:

// const count = useSelector((state) => state.counter.value);

// Breakdown:

// state → whole redux state
// state.counter → counter slice
// state.counter.value → actual value
