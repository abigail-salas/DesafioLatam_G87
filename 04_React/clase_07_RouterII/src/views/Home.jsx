import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const irAlPersonaje = () => navigate(`/personajes/${id}`);

  return (
    <div className="page-container">
      <h3>HOME</h3>

      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
        placeholder="Busca un personaje"
      />

      <button onClick={irAlPersonaje}>Buscar</button>
    </div>
  );
}

export default Home;
