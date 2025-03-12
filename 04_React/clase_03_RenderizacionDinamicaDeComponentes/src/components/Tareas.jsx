import React, { useState } from "react";

function Tareas() {
  const colores = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "black",
    "white",
  ];

  let mapeoColores = colores.map((c) => (
    <li key={c} style={{ color: c }}>
      {c}
    </li>
  ));

  const arrayTareas = ["Estudiar", "Trabajar", "Hacer deporte"];
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(arrayTareas);

  /* ------ funcion para enviar el formulario ------ */

  function handleSubmit(e) {
    e.preventDefault();

    /* agregar una tarea */
    setListaTareas([...listaTareas, nombreTarea]);

    /* limpiar el input */
    setNombreTarea("");
  }

  /* ------ Funcion para mostrar los valores ------ */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* ------ Funcion para renderizar lista ------ */

  const mostrarLista = listaTareas.map((tarea) => <li key={tarea}>{tarea}</li>);

  /* Ejemplo Spread Operator */

  /* let a = [1, 2, 3];

  console.log(a, "<---- arreglo original");
  a.push("a", "e", "i");
  console.log(a, "<---- arreglo originial modificado");

  let b = [...a, "o", "u"];
  console.log(a, "<---- arreglo original");
  console.log(b, "<---- arreglo copia con spread operator"); */

  return (
    <div>
      <ul>{mapeoColores}</ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nombreTarea}
          onChange={mostrarInput}
          name="nombreTarea"
        />
        <button>Agregar Tarea</button>
      </form>

      <ul>{mostrarLista}</ul>
    </div>
  );
}

export default Tareas;
