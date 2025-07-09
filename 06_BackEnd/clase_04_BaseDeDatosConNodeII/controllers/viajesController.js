const {
  actualizarPresupuesto,
  borrarViaje,
  obtenerViajes,
} = require("../queries/viajesQueries");

const modificarPresupuesto = async (req, res) => {
  const { id } = req.params;

  const { presupuesto } = req.query;
  console.log("aca existo");
  try {
    await actualizarPresupuesto(presupuesto, id);
    res.send("presupuesto modificado con exito");
  } catch (error) {
    res.status(500).send(error);
  }
};

const eliminarViaje = async (req, res) => {
  const { id } = req.params;

  try {
    await borrarViaje(id);
    res.send("viaje eliminado con exito");
  } catch (error) {
    res.status(500).send(error);
  }
};

const obtenerTodosLosViajes = async (req, res) => {
  try {
    const viajes = await obtenerViajes();
    res.json(viajes);
  } catch (error) {
    res.status(500).send("Error al obtener los viajes");
  }
};

module.exports = { modificarPresupuesto, eliminarViaje, obtenerTodosLosViajes };
