import { useReducer } from "react";
import handelCounter from "./theReducer";
import { handelText } from "./theReducer";

function Counter() {
  const [theCount, dispatch] = useReducer(handelCounter, 0);
  // const [current state value, A function to send actions to the reducer to update the state] =
  // useReducer( function that determines how the state should change based on the action , initial value of the state);

  const add = () => {
    dispatch({
      type: "add",
      payload: "no payload add",
    });
  };
  const sub = () => {
    dispatch({
      type: "sub",
      payload: "no payload sub",
    });
  };

  return (
    <div>
      <h1>{theCount}</h1>
      <button onClick={() => sub()}>-</button>
      <span style={{ width: "10px", display: "inline-block" }}></span>
      <button onClick={() => add()}>+</button>
    </div>
  );
}
export default Counter;
///////////////////////

function Print() {
  const [text, dispatch] = useReducer(handelText, "ABC");

  return (
    <div>
      <p>{text}</p>
      <input
        onChange={(e) => {
          dispatch({
            type: "data",
            payload: e.target.value,
          });
        }}
      ></input>
    </div>
  );
}
export { Print };
