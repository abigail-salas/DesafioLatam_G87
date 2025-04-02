import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import BotonCambio from "./BotonCambio";

function Component2() {
  const { info } = useContext(InfoContext);
  return (
    <div>
      <h4>Componente 2</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A culpa
        repellendus nobis in quas rem tempore officia fugit, quos aliquam.
      </p>

      <h6 style={{ fontSize: "20px" }}>{info.join(", ")} </h6>

      <BotonCambio />
    </div>
  );
}

export default Component2;
