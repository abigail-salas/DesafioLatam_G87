/* ------------- VALORES PRIMITIVOS ------------- */

/* Numeros */
(3 + 2) * 3 + 1; // devuelve ---> 16
3 + 2 * 3 + 1; // devuelve ---> 10

/* String */
("Hola, cómo estás");
("2");

/* Booleanos */
true;
false;

/* Funciones para saber el tipo de dato ingresado (Siempre los devuelve como string) */
typeof 12; // devuelve ---> 'number'
typeof "hola"; // devuelve ---> 'string'
typeof true; // devuelve ---> 'boolean'
typeof "true"; // devuelve ---> 'string'

/* ------------- MENSAJES DE CONSOLA ------------- */

console.log("Hola desde el index.html");
console.log(1234);

// console.error("Soy un error desde el script");
// console.warn("Soy una advertencia");

/* ------------- ALERTAS ------------- */

alert("Soy una alerta");
confirm("Acepta todos los termino y condiciones");
prompt("Decime como te llamas");

/* ------------- VARIABLES ------------- */

let numero = 123;
console.log(numero, "<---- Esto es la variables NUMERO");

let nombre = "José Antonio"; // Declarando la variable
console.log(nombre, "<---- nombre con el primer valor");

nombre = "Piero"; // Modificando el valor
console.log(nombre, "<---- nombre con el segundo valor");

/* ------------- CONCATENACION ------------- */

let nombreCompleto = prompt(
  "Decime cuál es tu nombre completo"
); /* <---- prompt SIEMPRE DEVUELVE UN STRING */
alert("Hola " + nombreCompleto + ", cómo estás?");

/* ejemplo de algunos errores a la hora de utilizar concatenacion y pormpt ↓↓↓↓ */

alert("Decime 2 numeros y te digo la suma de ellos");

// let primerNum = prompt("Primer numero");
// let segundoNum = prompt("Segundo numero");

// let resultado = primerNum + segundoNum; // Termina como una concatenacion

// console.log(typeof primerNum, "<--- primer");
// console.log(typeof segundoNum, "<--- segundo");
// console.log(resultado, "<--- resultado");

// alert("La suma de tus números es: " + resultado);

/* Arreglar el error trasnformando los datos para que sea una suma matematica en vez de una concatenacion ↓↓↓↓ */

// let primerNum = Number(prompt("Primer numero"));
// let segundoNum = Number(prompt("Segundo numero"));

// let resultado = primerNum + segundoNum;

// alert("La suma de tus números es: " + resultado);

/* Otra resolucion al mismo problema ↓↓↓↓ */

let primerNum = prompt("Primer numero");
let segundoNum = prompt("Segundo numero");

let resultado = parseInt(primerNum) + parseInt(segundoNum);

console.log(typeof primerNum, "<--- primer");
console.log(typeof segundoNum, "<--- segundo");
console.log(typeof resultado, "<--- resultado");

alert("La suma de tus números es: " + resultado);

/* ------------- TEMPLATE LITERAL ------------- */

let edad = Number(prompt("Decime tu edad"));
let primerNombre = prompt("Decime tu nombre");
let apellido = prompt("Decime tu apellido");

/* concatenacion ↓↓↓↓ */
console.log(
  "Hola, mi nombre es " +
    primerNombre +
    " y mi apellido es " +
    apellido +
    ". Tengo " +
    edad +
    " años de edad."
);

/* Template Literal ↓↓↓↓ */
console.log(
  `Hola, mi nombre es ${primerNombre} y mi apellido es ${apellido}. Tengo ${edad} años de edad.`
);

/* ------------- DOM (Document Object Model) ------------- */

let elemento = document.querySelector("p");
console.log(elemento, "<--- elemento");

let menu = document.querySelector(".navbar");

let cardSection = document.querySelector("#card-section");

let footer = document.querySelector("footer");

/* ------------- MANIPULANDO EL DOM ------------- */

/* Cambiar o Agregar texto */
menu.innerHTML = "Modificando Menu desde JS";
cardSection.innerHTML = "Agregando contenido desde JS";

/* Cambiar o Agregar Estilos */
elemento.style.color = "red";
menu.style.backgroundColor = "#03563f";
cardSection.style.fontSize = "30px";
footer.style.fontFamily = "Fantasy";

let cuerpo = document.querySelector("body");
cuerpo.style.backgroundColor = "rgb(33, 6, 72)";
