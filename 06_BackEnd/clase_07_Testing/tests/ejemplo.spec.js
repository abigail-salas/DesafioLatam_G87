const request = require("supertest");
const server = require("../index");

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

describe("Testing unitario con Jest", () => {
  it("Comprobando el resultado de una sumatoria", () => {
    const n1 = 4;
    const n2 = 5;
    const resultado = sumar(n1, n2);
    expect(resultado).toBe(9);
  });

  it("Debe multiplicar correctamente", () => {
    const resultado = multiplicar(5, 6);
    expect(resultado).toBe(30);
  });
});

describe("Operaciones CRUD", () => {
  it("Debe obtener un status 200", async () => {
    const response = await request(server).get("/productos").send();
    const status = response.statusCode;
    expect(status).toBe(200);
  });

  it("Consulta a una ruta que no existe", async () => {
    const response = await request(server).get("/hgfh").send();
    const status = response.statusCode;
    expect(status).toBe(404);
  });

  it("Obteniendo un producto", async () => {
    const { body } = await request(server).get("/productos/1").send();
    const producto = body;
    expect(producto).toBeInstanceOf(Object);
  });

  it("Obteniendo un arreglo completo de productos", async () => {
    const { body } = await request(server).get("/productos").send();
    const producto = body;
    expect(producto).toBeInstanceOf(Array);
  });

  it("Enviando un nuevo producto", async () => {
    const id = Math.floor(Math.random() * 999);

    const producto = { id, nombre: "Nuevo producto" };

    const { body: productos } = await request(server)
      .post("/productos")
      .send(producto);
    expect(productos).toContainEqual(producto);
  });

  it("Editando un producto que no existe", async () => {
    const id = "abc";

    const producto = { id, nombre: "Producto que no existe" };

    const { statusCode } = await request(server)
      .put("/productos")
      .send(producto);
    expect(statusCode).toBe(404);
  });

  it("Eliminando un producto", async () => {
    const jwt = "token";

    const idAEliminar = 3;

    const { body: productos } = await request(server)
      .delete(`/productos/${idAEliminar}`)
      .set("Authorization", jwt)
      .send();
    const id = productos.map((e) => e.id);
    expect(id).not.toContain(idAEliminar);
  });

  it("Eliminando un producto sin token", async () => {
    const { statusCode } = await request(server).delete(`/productos/1`).send();
    expect(statusCode).toBe(400);
  });
});
