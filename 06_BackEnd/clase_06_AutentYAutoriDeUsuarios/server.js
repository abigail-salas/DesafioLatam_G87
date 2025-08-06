const cors = require("cors");
const express = require("express");
require("dotenv").config();
const eventosRoutes = require("./routes/eventosRoutes");
const authRouter = require("./routes/authRouter");

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(eventosRoutes);
app.use(authRouter);

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`));

app.use(cors());
