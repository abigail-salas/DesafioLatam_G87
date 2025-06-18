function data(nombre, apellido, edad, ciudad) {
  console.log(
    `Hola, soy ${nombre} ${apellido}, tengo ${edad} años y vivo en ${ciudad}`
  );
}

function lista(uno, dos, tres) {
  console.log(`
        1.${uno}
        2.${dos}
        3.${tres}`);
}

module.exports = { data, lista };
