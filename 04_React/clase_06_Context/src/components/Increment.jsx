import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Increment() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h4>Increment {count}</h4>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Increment;
