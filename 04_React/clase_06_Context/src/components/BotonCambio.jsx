import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

function BotonCambio() {
  const { toggleInfo } = useContext(InfoContext);

  return (
    <div>
      <button onClick={toggleInfo}>CAMBIO</button>
    </div>
  );
}

export default BotonCambio;
