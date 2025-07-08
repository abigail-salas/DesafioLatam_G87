const express = require("express");
const {
  obtenerViajes,
  agregarViajes,
  obtenerViajesPorPais,
} = require("./consultas");

const app = express();

app.use(express.json());

app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});

app.get("/viajes/:pais", async (req, res) => {
  const { pais } = req.params;
  const viajesPorPais = await obtenerViajesPorPais(pais);
  res.json(viajesPorPais);
});

app.post("/viajes", async (req, res) => {
  const { destino, presupuesto } = req.body;
  await agregarViajes(destino, presupuesto);

  res.send("Viaje agregado con exito");
});

app.listen(3000, () => console.log("Servidor levantado en el puerto 300"));
