const { pool } = require("../config/config");

const actualizarPresupuesto = async (presupuesto, id) => {
  const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";
  const values = [presupuesto, id];
  await pool.query(consulta, values);
};

const borrarViaje = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1";

  const values = [id];
  await pool.query(consulta, values);
};

const obtenerViajes = async () => {
  const consulta = "SELECT * FROM viajes";

  const result = await pool.query(consulta);

  console.log(result.rows);

  return result.rows;
};

module.exports = { actualizarPresupuesto, borrarViaje, obtenerViajes };
