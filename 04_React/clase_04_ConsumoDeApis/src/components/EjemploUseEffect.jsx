import React, { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  // Ciclo de vida:
  // * Montaje
  // * Actualización
  // * Desmontaje

  useEffect(() => {
    document.title = `Contador: ${contador}`;
    console.log(contador, "<---- contador dentro de useEffect");
    console.log("acá funciona useEffect");
    console.log(nombre, "<---- nombre dentro de useEffect");
  }, [nombre]);

  // Sintaxis: useEffect(useCallback, dependencia);
  // * Si la dependencia esta vacia ([]) se ejecuta una sola vez al inicio
  // * Si la dependencia tiene un valor, se ejecuta cada vez que ese valor cambie. Puede ser uno o más valores

  return (
    <div>
      <p>Clickeaste {contador} veces</p>

      <button onClick={() => setContador(contador + 1)}>Contador</button>

      <button>Otro</button>

      <input
        type="text"
        name={nombre}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>
  );
}

export default EjemploUseEffect;
