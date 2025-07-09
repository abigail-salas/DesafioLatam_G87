const express = require("express");
const {
  modificarPresupuesto,
  eliminarViaje,
  obtenerTodosLosViajes,
} = require("../controllers/viajesController");

const router = express.Router();

router.put("/viajes/:id", modificarPresupuesto);

router.delete("/viajes/:id", eliminarViaje);

router.get("/viajes", obtenerTodosLosViajes);

module.exports = router;
