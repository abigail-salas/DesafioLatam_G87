/* ================== METODOS DE ARREGLOS ================== */

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "ejemplo"];

/* ------------- AGREGAR ELEMENTOS ------------- */

// METODO push(parametro) - Agrega un elemento al final del arreglo

num.push("metodo push");
// queda en --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "metodo push"]

// METODO unshift(parametro) - Agrega un elemento al principio del arreglo

num.unshift("metodo unshift");
// queda en --> ["metodo unshift", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "metodo push"]

/* ------------- ELIMINAR ELEMENTOS ------------- */

// METODO pop() - Elimina el ultimo elemento del arreglo - El elemento eliminado se puede guardar en una variable

let eliminadoPop = num.pop();
// queda en --> ["metodo unshift", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// llamando a la variable eliminadoPop --> "metodo push"

// METODO shift() - Elimina el primer elemento del arreglo - El elemento eliminado se puede guardar en una variable

let eliminadoShift = num.shift();
// queda en --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// llamando a la variable eliminadoShift --> "metodo unshift"

// METODO splice(posicion, cantidadDeElemtosABorrar) - Elimina elementos de un arreglo, a partir de una posicion y una cantidad - Se pueden agregar elementos en la posicion eliminada

let eliminadoSplice = num.splice(4, 2);
// queda en --> [1, 2, 3, 4, 7, 8, 9, 10]
// llamando a la variable eliminadoSplice --> [5, 6]

/* ------------- BUSCAR SU POSICION ------------- */

// METODO indexOf(parametro) - Busca un elemento en el arreglo y devuelve su posicion - Si no encuentra coincidencias, devuelve -1

let buscarIndexOf = num.indexOf("ejemplo");
// devuelve --> 10

// METODO findIndex(parametro) - Busca un elemento en el arreglo, mediante una funcion y devuelve su posicion - Si no encuentra coincidencias, devuelve -1

let buscarFindIndex = num.findIndex((e) => e === "otro");
// devuelve -1

/* ------------- BUSCAR ELEMENTOS ------------- */

// METODO find(funcion) - Busca el PRIMER elemento que cumpla con la condición y lo devuelve. Si no encuentra coincidencias, devuelve `undefined`.

let primerPar = num.find((e) => typeof e === "number" && e % 2 === 0);
// devuelve --> 2 (porque es el primer número par encontrado)

// METODO filter(funcion) - Crea un nuevo arreglo con los elementos que cumplen con la condición

let soloNumeros = num.filter((e) => typeof e === "number");
// devuelve --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ------------- COPIAR ELEMENTOS ------------- */

// METODO slice(inicio, fin) - Copia una porción del arreglo desde la posición `inicio` hasta la posición `fin` (sin incluir `fin`)

let copiaSlice = num.slice(2, 5);
// devuelve --> [3, 4, 5]
// el arreglo original queda igual --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "ejemplo"]

/* ------------- MODIFICAR COMO TEXTO ------------- */

// METODO join(separador) - Une todos los elementos del arreglo en un solo string, separados por el `separador`

let textoJoin = num.join(", ");
// devuelve --> "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ejemplo"

/* ------------- RECORRER ARREGLOS ------------- */

// METODO map(funcion) - Crea un nuevo arreglo transformando cada elemento según la función proporcionada

let duplicados = num.map((e) => (typeof e === "number" ? e * 2 : e));
// devuelve --> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, "ejemplo"]

// METODO forEach(funcion) - Recorre el arreglo y ejecuta una función en cada elemento, pero NO devuelve un nuevo arreglo.

num.forEach((e) => console.log(`Elemento: ${e}`));
// imprime en consola cada elemento del arreglo

// BUCLE for - Otra forma de recorrer un arreglo manualmente

for (let i = 0; i < num.length; i++) {
  console.log(`Índice ${i}: ${num[i]}`);
}
// imprime cada elemento con su índice

/* ==================  DOM + METODOS + EVENTOS  ================== */

const listaDeInvitados = document.querySelector("#invitados");
const invitadosInput = document.querySelector("#nuevo-invitado");
const btnAgregar = document.querySelector("#agregar-invitado");

let invitados = [];

btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = invitadosInput.value;

  invitados.push(nuevoInvitado);
  invitadosInput.value = "";

  let html = "";
  for (const element of invitados) {
    html += `<li>${element}</li>`;
  }

  listaDeInvitados.innerHTML = html;
});

/* OPTIMIZANDO EL EJEMPLO ANTERIOR */

const listaDeItems = document.querySelector("#items");
const itemsInput = document.querySelector("#nuevo-item");
const btnAgregarItem = document.querySelector("#agregar-item");

const items = [
  { id: 1, nombre: "Teclado" },
  { id: 2, nombre: "Mouse" },
  { id: 3, nombre: "Monitor" },
  { id: 4, nombre: "Parlantes" },
];

btnAgregarItem.addEventListener("click", () => {
  const nuevoId = items[items.length - 1].id + 1;

  const nuevoItem = { id: nuevoId, nombre: itemsInput.value };

  items.push(nuevoItem);

  itemsInput.value = "";

  render();
});

function render() {
  let html = "";
  for (const element of items) {
    html += `<li>${element.nombre} <button onclick="borrarItem(${element.id})">X</button>  </li>`;
  }
  listaDeItems.innerHTML = html;
}

function borrarItem(id) {
  const index = items.findIndex((e) => e.id === id);

  items.splice(index, 1);

  render();
}
