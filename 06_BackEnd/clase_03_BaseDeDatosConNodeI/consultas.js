const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const getDate = async () => {
  const result = await pool.query("SELECT NOW()");
  console.log(result.rows);
};

getDate();

const agregarViajes = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2)";
  const values = [destino, presupuesto];
  const result = await pool.query(consulta, values);
  console.log("Viajes agregado con exito", result.rowCount);
};

// agregarViajes("España", 463521);

const obtenerViajes = async () => {
  const consulta = "SELECT * FROM viajes";

  const result = await pool.query(consulta);

  // console.log(result.rows);

  return result.rows;
};

obtenerViajes();

const obtenerViajesPorPais = async (pais) => {
  const consulta = "SELECT * FROM viajes WHERE destino = $1";

  const values = [pais];

  const result = await pool.query(consulta, values);

  return result.rows;
};

module.exports = { agregarViajes, obtenerViajes, obtenerViajesPorPais };
