import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  /* Cuando actualizas el estado en React basado en el estado anterior, lo recomendado es usar una función de actualización: setContador((count) => (count += 1) 
    React no actualiza el estado de inmediato, sino que lo programa para el próximo render */

  const suma = () => setContador((count) => (count += 1));
  const resta = () => setContador((count) => (count -= 1));

  return (
    <div>
      <button onClick={suma}>+</button>
      <button onClick={resta}>-</button>
      <h3>Cuenta: {contador}</h3>
    </div>
  );
}

export default Contador;
