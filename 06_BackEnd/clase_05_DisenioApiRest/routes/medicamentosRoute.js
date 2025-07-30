const express = require("express");
const {
  obtenerMedicamentos,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltro,
} = require("../controllers/medicamentosController");

const router = express.Router();

// Ruta para obtener medicamentos limitados

router.get("/medicamentos", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentos(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los medicamentos" });
  }
});

router.get("/medicamentos/orden", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosOrdenados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los medicamentos ordenados" });
  }
});

router.get("/medicamentos/pagina", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPaginados(req.query);
    res.json(medicamentos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los medicamentos paginados" });
  }
});

router.get("/medicamentos/filtro", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPorFiltro(req.query);
    res.json(medicamentos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al obtener los medicamentos por filtro" });
  }
});

module.exports = router;
