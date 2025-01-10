/* CONDICIONALES */

// let edad = Number(prompt('¿Cuál es tu edad?'));
/* let edad = Number(prompt("¿Cuál es tu edad?"));

console.log(edad, "<-- EDAD");

console.log(typeof edad, "<-- EDAD typeof");

if (edad < 18) {
  alert("No podés entrar al bar");
} else {
  alert("Bienvenido al bar");
} */

/* ------------------- OPERADORES ------------------- */

// ========> OPERADORES DE ASIGNACION <========
let x = 5;
x = 10;

// ========> OPERADORES DE COMPARACION <========

// DE IGUALDAD == // ===
// Simple →→→ Compara el valor
12 == 12;
//devuelve ---> true
"hola" == "Hola";
//devuelve ---> false;
"hola" == "hola";
//devuelve ---> true;
"23" == 23;
//devuelve ---> true;
"23" == 24;
//devuelve ---> false;

// Estricta →→→ Compara el valor Y EL TIPO DE DATO
12 === 12;
//devuelve ---> true
"hola" === "Hola";
//devuelve ---> false
"23" === 23;
//devuelve ---> false

// DE DESIGUALDAD != // !==
// Simple →→→ Compara el valor

45 != 45;
//devuelve ---> false
"chau" != "chau";
//devuelve ---> false
"chau" != "Chau";
//devuelve ---> true
"32" != 32;
//devuelve ---> false

// Estricta →→→ Compara el valor Y EL TIPO DE DATO
78 !== "78";
//devuelve ---> true

/* ---------- IF ---------- ELSE ---------- */

/* let pedazosDeTorta = Number(prompt("¿Cuántos pedazos de torta hay?"));
let invitados = Number(prompt("¿Cuántos invitados hay?"));
let porcionesPorInvitado = pedazosDeTorta / invitados;

if (porcionesPorInvitado >= 1) {
  alert("Hay suficiente porciones de torta para todos");
} else {
  alert("No hay suficientes porciones de torta para todos");
}

if (false) {
  console.log("object");
} else {
  console.log("object");
} */

/* ---------- IF ---------- ELSE IF ---------- ELSE ---------- */

let px = Number(prompt("Ingrese un número de pixeles"));

/* if (px < 576) {
  console.log(`${px} equivalen al tamaño de pantalla XS`);
} else if (px >= 576) {
  console.log(`${px} equivalen al tamaño de pantalla SM`);
} else if (px >= 768) {
  console.log(`${px} equivalen al tamaño de pantalla MD`);
} else if (px >= 962) {
  console.log(`${px} equivalen al tamaño de pantalla XL`);
} else {
  console.log("Ingresa un número válido");
} */

if (px < 576) {
  console.log(`${px} equivalen al tamaño de pantalla XS`);
} else if (px >= 962) {
  console.log(`${px} equivalen al tamaño de pantalla XL`);
} else if (px >= 768) {
  console.log(`${px} equivalen al tamaño de pantalla MD`);
} else if (px >= 576) {
  console.log(`${px} equivalen al tamaño de pantalla SM`);
} else {
  console.log("Ingresa un número válido");
}

console.log("aca sali del bloque condicional");
