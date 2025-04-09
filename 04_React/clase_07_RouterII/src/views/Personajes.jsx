import React from "react";
import { useParams } from "react-router-dom";

function Personajes() {
  const { id } = useParams();

  return (
    <div className="page-container">
      <h3>PERSONAJE {id}</h3>
    </div>
  );
}

export default Personajes;
