import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Decrement() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h4>Decrement {count}</h4>

      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Decrement;
