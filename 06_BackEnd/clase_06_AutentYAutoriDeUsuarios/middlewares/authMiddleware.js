const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const Authorization = req.header("Authorization");
    const token = Authorization.split("Bearer ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token no proporcionado" });
    }

    jwt.verify(token, "clave", (err, payload) => {
      if (err) {
        return res.status(401).json({ error: "Token invalido" });
      }

      req.user = payload;

      next();
    });

    console.log(token);
  } catch (error) {
    res.status(500).json({ error: "Error de autenticacion" });
  }
};

module.exports = authMiddleware;
