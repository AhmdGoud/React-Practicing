import { useState } from "react";

const Secondary = () => {
  const [count2, setCount2] = useState(0);
  console.log("from secondary");

  return (
    <div>
      <p>*********</p>
      <p>{count2}</p>
      <button onClick={() => setCount2((prev) => (prev += 2))}>Btn2</button>
    </div>
  );
};
export default Secondary;
