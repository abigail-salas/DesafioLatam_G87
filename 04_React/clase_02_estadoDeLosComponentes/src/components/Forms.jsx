import React, { useState } from "react";

function Forms() {
  const [nombre, setNombre] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga del navegador

    if (nombre === "") {
      setMensajeError("El nombre es obligatorio");
      return;
    }

    setMensajeError(""); // Limpiar el mensaje de error

    alert(`Formulario enviado con el nombre: ${nombre}`);

    setNombre(""); // Limpiar el campo de nombre
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* {mensajeError && <p>{mensajeError}</p>} */}

        {mensajeError ? <p>{mensajeError}</p> : null}

        <h3>{nombre}</h3>

        <div>
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
