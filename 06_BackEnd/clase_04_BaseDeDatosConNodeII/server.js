/* const express = require("express");
const { Pool } = require("pg");
const app = express();
const port = 3000;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

app.use(express.json());

const modificarPresupuesto = async (presupuesto, id) => {
  const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";

  const values = [presupuesto, id];

  await pool.query(consulta, values);
};

app.put("/viajes/:id", async (req, res) => {
  const { id } = req.params;

  const { presupuesto } = req.query;

  try {
    await modificarPresupuesto(presupuesto, id);
    res.send("presupuesto modificado con exito");
  } catch (error) {
    res.status(500).send(error);
  }
});

const eliminarViaje = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1";

  const values = [id];
  await pool.query(consulta, values);
};

app.delete("/viajes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await eliminarViaje(id);
    res.send("viaje eliminado con exito");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`)); */

const express = require("express");
const app = express();

const viajesRoutes = require("./routes/viajesRoutes");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(viajesRoutes);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));
