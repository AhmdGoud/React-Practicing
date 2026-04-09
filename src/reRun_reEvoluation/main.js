import { useState } from "react";
import Secondary from "./secondary";

const Main = () => {
  const [count, setCount] = useState(0);
  console.log(" from main");

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => (prev += 1))}>Btn</button>

      <Secondary />
    </div>
  );
};

export default Main;
