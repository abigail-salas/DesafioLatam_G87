import React from "react";

/* + Aplicar estilos mediante variables */
let estilos = { color: "#62afb5", fontSize: "40px" };

function Banner() {
  return (
    <div className="banner-css">
      {/* Aplicar css mediante className ↑↑↑↑ */}

      {/* Aplicar estilos en linea ↓↓↓↓ */}
      <h2 style={{ fontFamily: "fantasy" }}>Esto es un banner</h2>
      <img
        src="https://images.unsplash.com/photo-1710781944947-7cd4a381499f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width="700px"
        height="400px"
      />

      {/* + Aplicar estilos mediante variables ↓↓↓↓ */}
      <p style={estilos}>
        Lorem, ipsum dolor sit amet consectetur adipisicing eliit. Minima,
        voluptate?
      </p>
    </div>
  );
}

export default Banner;
