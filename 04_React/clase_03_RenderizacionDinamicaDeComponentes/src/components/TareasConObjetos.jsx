import React, { useState } from "react";
import { tareaConObjetos } from "../utils/TareasIniciales";

function TareasConObjetos() {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareaConObjetos);
  const [idTarea, setIdTarea] = useState(
    tareaConObjetos[tareaConObjetos.length - 1].id
  );

  /* ------ Funcion para enviar el formulario ------ */
  function handleSubmit(e) {
    e.preventDefault();

    /* Generar un nuevo id único */
    const nuevoId = idTarea + 1;

    /* Actualizar el id */
    setIdTarea(nuevoId);

    /* Agregamos la tarea */
    setListaTareas([
      ...listaTareas,
      { id: nuevoId, tarea: nombreTarea, completada: false },
    ]);

    /* Vaciamos el input */
    setNombreTarea("");
  }

  /* ------ Funcion para renderizar lista ------ */
  const mostrarLista = listaTareas.map((t) => (
    <li
      key={t.id}
      style={t.completada === true ? { textDecoration: "line-through" } : {}}
    >
      {t.tarea}
      {t.completada === false ? (
        <button onClick={() => completar(t)}>Completar</button>
      ) : (
        ""
      )}

      <button onClick={() => eliminar(t)}>Eliminar</button>
    </li>
  ));

  /* ------ Funcion para mostrar los valores ------ */
  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* ------ Funcion para completar la tarea ------ */
  function completar(params) {
    const nuevasTareas = [...listaTareas];

    /* Buscar una coincidencia unica */

    let encontrada = nuevasTareas.findIndex((t) => t.id === params.id);

    nuevasTareas[encontrada].completada = true;

    setListaTareas(nuevasTareas);
  }

  /* ------ Funcion para eliminar una tarea ------ */
  function eliminar(params) {
    /* Filtrar el arreglo para excluir el ID dado */
    const nuevasTareas = listaTareas.filter((t) => t.id !== params.id);

    setListaTareas(nuevasTareas);
  }

  return (
    <div>
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

export default TareasConObjetos;
