const express = require("express");
const {
  verificarCredenciales,
  generarToken,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await verificarCredenciales(email, password);

    const token = generarToken(email);

    res.send(token);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

module.exports = router;
