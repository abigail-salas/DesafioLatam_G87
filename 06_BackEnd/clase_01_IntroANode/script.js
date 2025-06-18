// node --watch script.js

const fs = require("fs");
const { data, lista } = require("./funciones");

const tareas = `
1. Pasear al perro
2. Ir al gym
3. Estudiar
4. Limpiar el baño
`;

fs.writeFileSync("tareas.txt", tareas);

const lenguajes = [
  { text: "Javascript" },
  { text: "Java" },
  { text: "Python" },
  { text: "Typescript" },
];

fs.writeFileSync("lenguajes.json", JSON.stringify(lenguajes));

const lecturaJson = fs.readFileSync("lenguajes.json", "utf-8");
console.log(lecturaJson);

const lecturaTxt = fs.readFileSync("tareas.txt", "utf-8");
console.log(lecturaTxt);

// Funciones importadas desde otro archivo

data("Fernando", "Martinez", 45, "Buenos Aires");

lista("teclado", "monitor", "mouse");
