const express = require("express");

const app = express(); // Crea la aplicacion express

const fs = require("fs");

app.listen(3000, console.log("Servidor levantado")); // Iniciamos la aplciacion

app.get("/", (req, res) => {
  res.send("Primera pantalla");
}); // Envio de la solicitud GET

/* 
req: El objeto de solicitud (request)
res: El objeto de respuesta (response)
*/

app.get("/home", (req, res) => {
  res.send("Vista principal");
});

app.get("/user", (req, res) => {
  res.send("Pantalla de usuario");
});

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
  res.json(productos);
});

app.use(express.json());

app.post("/productos", (req, res) => {
  const nuevoProducto = req.body;

  const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));

  productos.push(nuevoProducto);

  fs.writeFileSync("productos.json", JSON.stringify(productos));

  res.send("Producto agregado con exito!");
});
