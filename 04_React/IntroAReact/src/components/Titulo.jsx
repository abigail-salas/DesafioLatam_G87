import React from "react";
import Banner from "./Banner";

let nombre = "Valeria";

function Titulo() {
  return (
    <div>
      <h2>Hola desde Titulo</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sequi
        adipisci laborum voluptatibus dignissimos quod accusamus soluta
        praesentium porro inventore?
      </p>

      {/* Utilizando variables dentro de etiquetas */}
      <h3>Mi nombre es {nombre}</h3>

      <Banner />
    </div>
  );
}

export default Titulo;
