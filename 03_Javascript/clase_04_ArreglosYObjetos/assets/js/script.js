let nombre1 = "Rodrigo";
let nombre2 = "Juan";
let nombre3 = "Pedro";
let nombre4 = "Lucia";
let nombre5 = "Maria";
let nombre6 = "Ana";

/* ---------- ARREGLOS ---------- */

let nombres = ["Rodrigo", "Juan", "Pedro", "Lucia", "Maria", "Ana"];

/* CANTIDAD DE ELEMENTOS */

nombres.length;
// devuelve ---> 6

/* ACCEDER A LOS ELEMENTOS DENTRO DEL ARREGLO */

nombres[0];
// devuelve ---> 'Rodrigo'
nombres[3];
// devuelve ---> 'Lucia'
nombres[6];
// devuelve ---> undefined

/* AGREGAR ELEMENTOS AL ARREGLO */

// Mala practica
nombres[6] = "Cecilia";
//nombres[10] = "Esteban";

/* ---------- BUCLES ---------- */

/* FOR */

for (let i = 0; i < nombres.length; i++) {
  const element = nombres[i];
  console.log(element, "<--- elemento dentro del bucle");
}

for (const element of nombres) {
  console.log(element);
}

/* ---------- OPERADORES ARITMETICOS ---------- */

// SUMA DE A 1
let numero = 0;
numero++;
// devuelve ---> 0
numero++;
// devuelve ---> 1
numero++;
// devuelve ---> 2
numero++;
// devuelve ---> 3
numero++;
// devuelve ---> 4
numero++;
// devuelve ---> 5
numero;
// devuelve ---> 6

// RESTA DE A UNO
numero--;
// devuelve ---> 6
numero--;
// devuelve ---> 5
numero--;
// devuelve ---> 4
numero;
// devuelve ---> 3

// SUMA, RESTA, MULTIPLICA Y DIVIDE en base al valor dado
numero = 100;
numero += 20;
// devuelve ---> 120;
numero += 20;
// devuelve ---> 140;
numero += 20;
// devuelve ---> 160;
numero += 20;
// devuelve ---> 180;
numero;
// devuelve ---> 180;
numero -= 40;
// devuelve ---> 140;
numero *= 2;
// devuelve ---> 280;
numero /= 4;
// devuelve ---> 70;

/* ---------- BUCLES, DOM, TEMPLATE LITERAL ---------- */

const dynamic = document.querySelector("#dynamic-content");

for (const element of nombres) {
  // console.log(element, "<--- dynamic");
  dynamic.innerHTML += `<li>${element}</li>`;
}

/* --------------- OBJETOS --------------- */

let datos = [
  "Maria Alejandra",
  56,
  "Buenos Aires",
  ["Carla", "Ricardo"],
  () => {
    console.log("Hola, soy Maria");
  },
];

let persona = {
  nombre: "Maria Alejandra",
  edad: 56,
  residencia: "Buenos Aires",
  hijos: ["Carla", "Ricardo"],
  saludo: () => {
    console.log("Hola, soy Maria");
  },
};

/* =======> ACCEDER A LOS VALORES <======= */
// BRACKET NOTATION (PUEDE ACEPAR VARIABLES)

persona["nombre"];
// devuelve ---> 'Maria Alejandra'
persona["edad"];
// devuelve ---> 56
persona["hijos"];
// devuelve ---> ['Carla', 'Ricardo']
persona["hijos"][0];
// devuelve ---> 'Carla'
persona["hijos"][1];
// devuelve ---> 'Ricardo'
persona["saludo"]();
// devuelve ---> Hola, soy Maria

// DOT NOTATION
persona.edad;
// devuelve ---> 56
persona.hijos[1];
// devuelve ---> 'Ricardo'
persona.saludo();
// devuelve ---> Hola, soy Maria

/* =======> AGREGAR NUEVOS VALORES <======= */
// BRACKET NOTATION
persona["profesion"] = "Programadora";

// DOT NOTATION
persona.pasaTiempo = "Leer";

/* =======> RECORRER UN OBJETO <======= */

for (const key in persona) {
  console.log(key, "<--- key");
  // console.log(persona[key], "<--- value");
  // console.log(persona.key, "<--- value");
}

/* --------------- ARREGLOS DE OBJETOS --------------- */

let productos = [
  { id: 1, nombre: "Remera", precio: 1500 },
  { id: 2, nombre: "Pantalon", precio: 2500 },
  { id: 3, nombre: "Camisa", precio: 3500 },
  { id: 4, nombre: "Zapatilla", precio: 10000 },
];

let html = "";

for (const element of productos) {
  html += `
    <div id="${element.id}">
      <h2>${element.nombre}</h2>
      <p>${element.precio}</p>
    </div>
  `;
}

const elemento = document.querySelector("#productos");
elemento.innerHTML = html;


