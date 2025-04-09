import React from "react";

import { NavLink } from "react-router-dom";

function Navigation() {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className="app">
      <NavLink className={activeClass} to={"/"}>
        Home
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/personajes"}>
        Personajes
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/login"}>
        Login
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/register"}>
        Register
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/admin"}>
        Admin
      </NavLink>
    </div>
  );
}

export default Navigation;
