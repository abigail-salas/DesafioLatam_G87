import React from "react";

/* function Propiedades(props) {
  let estilos = { backgroundColor: "#C4B9A5", color: "#725A2C" };

  return (
    <div style={estilos}>
      <h1>Titulo: {props.title}</h1>
      <h3>Precio: {props.price}</h3>
      <h4>Descripcion: {props.desc}</h4>
    </div>
  );
} */

// Ejemplo Destructured

/* let usuario = {
  nombre: "Valeria",
  edad: 25,
  pais: "Mexico",
};
console.log(usuario.pais);

let { nombre, edad } = usuario;
console.log(edad, "<----- Aplicando destructuring"); */

function Propiedades({ title, price, desc }) {
  let estilos = { backgroundColor: "#C4B9A5", color: "#725A2C" };

  return (
    <div style={estilos}>
      <h1>Titulo: {title}</h1>
      <h3>Precio: {price}</h3>
      <h4>Descripcion: {desc}</h4>
    </div>
  );
}

export default Propiedades;
