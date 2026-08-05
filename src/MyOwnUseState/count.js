import myUseState from "./myUseState";

export default function Count() {
  const [count, setCount] = myUseState(1);

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          console.log(count);
        }}
      >
        btn
      </button>
    </div>
  );
}
