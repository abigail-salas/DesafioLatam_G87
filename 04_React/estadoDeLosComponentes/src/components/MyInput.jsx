import React, { useState } from "react";

function MyInput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />

      <p>Entrada: {inputValue}</p>
    </div>
  );
}

export default MyInput;
