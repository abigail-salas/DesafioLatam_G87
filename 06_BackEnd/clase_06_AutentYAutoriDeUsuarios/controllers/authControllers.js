const { pool } = require("../config/db");
const jwt = require("jsonwebtoken");

const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1 AND password = $2";
  const values = [email, password];
  const { rowCount } = await pool.query(consulta, values);
  if (!rowCount)
    throw {
      code: 404,
      message: "No se encontró ningún usuario con estas credenciales",
    };
};

// Generar token JWT

const generarToken = (email) => {
  return jwt.sign({ email }, "clave");
};

module.exports = { verificarCredenciales, generarToken };
