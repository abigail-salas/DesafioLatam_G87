const express = require("express");
require("dotenv").config();
const medicamentosRoute = require("./routes/medicamentosRoute");
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(medicamentosRoute);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));
