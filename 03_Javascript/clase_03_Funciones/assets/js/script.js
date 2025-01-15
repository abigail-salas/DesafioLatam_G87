/* ---------------- DIFERENCIA ENTRE LAS VARIABLES Y SU ALCANCE ---------------- */

/* VAR */
//Se puede repetir su declaracion
var prueba = "aqui se declara";
//console.log(prueba, "<--- Primera declaración");

var prueba = "aqui se sobreescribe";
//console.log(prueba, "<--- Segunda declaración");

/* LET */
//Se declara una vez y despues se puede cambair su valor PERO NO SE PUEDE VOLVER A DECLARAR

//Esto es una variable GLOBAL
let intento = "aqui se declara let";
//console.log(intento, "<--- intento");
//let intento = "acá no existo"
intento = "aqui se modificar el valor let";
//console.log(intento, "<--- intento redeclarado");

/* CONST */
const fija = "esto no se puede modificar";
// console.log(fija, "<--- primer valor");

// fija = "aca no existo";
// console.log(fija, "<--- segundo valor");

/* ALCANCE DE LAS VARIABLES */

if (true) {
  // Esto es una varibale LOCAL
  let dentroDelBloque = "Solo existo dentro del bloque";
  //console.log(dentroDelBloque);

  // Puedo llamar a variables globales
  //console.log(intento, "<--- intento dentro del bloque");

  // Acá solo va a tomar el valor que se le dio de manera LOCAL
  let intento = "otro valor en intento";
  //console.log(intento, "<--- intento modificado de manera local");
}

//console.log(intento, "<--- intento fuera del bloque");

let dentroDelBloque = "acá ya existo fuera del bloque";
//console.log(dentroDelBloque);

/* ---------------- FUNCIONES ---------------- */

function pintarRojo() {
  const elemento = document.querySelector("body");

  elemento.style.backgroundColor = "rgb(52, 8, 8)";
}

function tamanioTitulo() {
  const elemento = document.querySelector("h4");

  elemento.style.fontSize = "30px";
}

function pintarLetrasP() {
  const elemento = document.querySelector("#parrafo");

  elemento.style.color = "rgb(7, 234, 208)";
}

/* UTILIZANDO PARAMETROS */

function fondoTitulo(color) {
  const elemento = document.querySelector("h1");

  elemento.style.backgroundColor = color;
}

/* function pintar(color, tag) {
  const elemento = document.querySelector(tag);

  elemento.style.color = color;
} */

/* VALORES POR DEFECTO */

function pintar(color = "red", tag = "h1") {
  const elemento = document.querySelector(tag);

  elemento.style.color = color;
}

/* ORDEN DE LOS PARAMETROS */

function presentacion(nombreCompleto, edad, pais, vocacion) {
  console.log(
    `Hola! Mi nombre es ${nombreCompleto}, tengo ${edad} años, soy de ${pais} y me dedico a ${vocacion}`
  );
}

presentacion("Juan Perez", 25, "Argentina", "Desarrollo Web");
// devuelve ---> Hola! Mi nombre es Juan Perez, tengo 25 años, soy de Argentina y me dedico a Desarrollo Web

presentacion("Desarrollo Web", "Juan Perez", 25, "Argentina");
// duevuelve ---> Hola! Mi nombre es Desarrollo Web, tengo Juan Perez años, soy de 25 y me dedico a Argentina

/* ---------------- RETORNO DE FUNCIONES---------------- */

function suma(a, b) {
  // console.log(a + b);
  return a + b;
}

console.log(`Soy la funcion suma: ${suma(25, 3)}`);

suma(10, 10);

/* ---------------- ARROW FUNCTION // FUNCIONES DE FLECHA ---------------- */

const resta = (a, b) => {
  return a - b;
};

console.log(resta(100, 50));

// Cuando está EN LA MISMA LINEA DE CODIGO, tanto las llaves como el return estan implicitos en la funcion

const multiplicacion = (a, b) => a * b;

console.log(multiplicacion(2, 50));
