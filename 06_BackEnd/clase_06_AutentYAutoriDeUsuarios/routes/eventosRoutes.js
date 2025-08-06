const express = require("express");
const {
  getEventos,
  deleteEvento,
} = require("../controllers/eventosControllers");
const authMiddleware = require("../middlewares/authMiddleware");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/eventos", async (req, res) => {
  try {
    const eventos = await getEventos();
    res.json(eventos);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

router.delete("/eventos/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEvento(id);

    const { email } = req.user.email;
    await deleteEvento(id);
    res.send(`El usuario ${email} ha eliminado el evento de id ${id}`);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

module.exports = router;
