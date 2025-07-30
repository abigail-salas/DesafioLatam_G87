const format = require("pg-format");
const { pool } = require("../config/db");

// Obtener los medicamentos limitados
const obtenerMedicamentos = async ({ limit = 10 }) => {
  const consulta = "SELECT * FROM medicamentos LIMIT $1";

  const { rows: medicamentos } = await pool.query(consulta, [limit]);

  return medicamentos;
};

// Obtener medicamentos ordenados

const obtenerMedicamentosOrdenados = async ({
  limit = 10,
  order_by = "id_ASC",
}) => {
  const [campo, direccion] = order_by.split("_");

  const consulta = "SELECT * FROM medicamentos ORDER BY %s %s LIMIT %s";

  const formattedQuery = format(consulta, campo, direccion, limit);

  const { rows: medicamentos } = await pool.query(formattedQuery);

  return medicamentos;
};

// Obtener medicamentos Paginados

const obtenerMedicamentosPaginados = async ({ limit = 10, page = 1 }) => {
  const offset = (page - 1) * limit;

  const consulta = "SELECT * FROM medicamentos LIMIT %s OFFSET %s";

  const formattedQuery = format(consulta, limit, offset);

  const { rows: medicamentos } = await pool.query(formattedQuery);

  return medicamentos;
};

// Obtener medicamentos filtrados

const obtenerMedicamentosPorFiltro = async ({ precio_max, stock_min }) => {
  let filtros = [];

  if (precio_max) filtros.push(`precio <= ${precio_max}`);
  if (stock_min) filtros.push(`stock >= ${stock_min}`);

  let consulta = "SELECT * FROM medicamentos";

  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }

  console.log(consulta);

  const { rows: medicamentos } = await pool.query(consulta);

  return medicamentos;
};

module.exports = {
  obtenerMedicamentos,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltro,
};
