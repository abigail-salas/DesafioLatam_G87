import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";
import BotonCambio from "./BotonCambio";

function Component1() {
  //   const { info } = useContext(InfoContext);

  return (
    <div>
      <h4>Componente 1</h4>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
        eligendi.
      </p>

      {/* <h6 style={{ fontSize: "20px" }}>{info.join(", ")}</h6>

      <BotonCambio /> */}
    </div>
  );
}

export default Component1;
