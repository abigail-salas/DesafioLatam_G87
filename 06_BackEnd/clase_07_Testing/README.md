# 📌 Matchers en Jest

## 🔍 ¿Qué son los matchers?

En **Jest**, los _matchers_ son métodos que usamos junto con `expect()` para comparar el resultado real de nuestro código (**valor obtenido**) con el resultado esperado (**valor esperado**).
Nos ayudan a validar si el código funciona como debería.

La estructura básica es:

```javascript
expect(valorObtenido).matcher(valorEsperado);
```

---

## 📚 Lista de Matchers Más Usados

### 1️⃣ `.toBe()`

- **Sirve para**: Comparar valores **primitivos** (números, cadenas, booleanos).
- **Cómo funciona**: Comprueba que el valor obtenido sea exactamente igual al valor esperado (usa `===` internamente).
- **Ejemplo**:

```javascript
expect(2 + 2).toBe(4); // ✅ Pasa
expect("hola").toBe("hola"); // ✅ Pasa
```

### 2️⃣ `.toEqual()`

- **Sirve para**: Comparar **objetos** y **arrays** (estructura y contenido).
- **Cómo funciona**: Verifica que tengan la misma forma y los mismos valores.
- **Ejemplo**:

```javascript
expect({ id: 1, nombre: "Producto" }).toEqual({ id: 1, nombre: "Producto" }); // ✅
expect([1, 2, 3]).toEqual([1, 2, 3]); // ✅
```

### 3️⃣ `.toContain()`

- **Sirve para**: Comprobar si un array contiene un valor específico.
- **Ejemplo**:

```javascript
expect([1, 2, 3]).toContain(2); // ✅ Pasa
```

### 4️⃣ `.toContainEqual()`

- **Sirve para**: Comprobar si un array contiene un **objeto** o un **array** con el mismo contenido.
- **Ejemplo**:

```javascript
const productos = [
  { id: 1, nombre: "Café" },
  { id: 2, nombre: "Té" },
];

expect(productos).toContainEqual({ id: 1, nombre: "Café" }); // ✅
```

### 5️⃣ `.toHaveProperty()`

- **Sirve para**: Verificar que un objeto tenga una propiedad específica (y opcionalmente un valor específico).
- **Ejemplo**:

```javascript
const producto = { id: 1, nombre: "Café" };

expect(producto).toHaveProperty("nombre"); // ✅ Pasa
expect(producto).toHaveProperty("nombre", "Café"); // ✅ Pasa
```

### 6️⃣ `.toBeInstanceOf()`

- **Sirve para**: Verificar que un valor es una instancia de una clase o tipo de dato.
- **Ejemplo**:

```javascript
expect([]).toBeInstanceOf(Array); // ✅
expect({}).toBeInstanceOf(Object); // ✅
expect("texto").toBeInstanceOf(String); // ❌ (Los strings primitivos no son instancias de String)
```

### 7️⃣ `.not`

- **Sirve para**: Negar una comparación.
- **Cómo funciona**: Se usa antes del matcher para comprobar que NO se cumpla la condición.
- **Ejemplo**:

```javascript
expect(5).not.toBe(3); // ✅
expect([1, 2, 3]).not.toContain(4); // ✅
```

### 8️⃣ `.toMatchObject()`

- **Sirve para**: Comprobar que un objeto contiene al menos las propiedades y valores esperados, sin importar si tiene más propiedades.
- **Ejemplo**:

```javascript
const producto = { id: 1, nombre: "Café", precio: 100 };

expect(producto).toMatchObject({ nombre: "Café" }); // ✅
```

### 9️⃣ `.toMatch()`

- **Sirve para**: Comparar cadenas usando expresiones regulares o texto.
- **Ejemplo**:

```javascript
expect("Hola Mundo").toMatch(/Mundo/); // ✅
expect("abc123").toMatch(/\d+/); // ✅ (contiene números)
```

---

### 🔹 Ejemplo Completo

```javascript
describe("Ejemplos de matchers", () => {
  it("Pruebas con diferentes matchers", () => {
    const productos = [
      { id: 1, nombre: "Café" },
      { id: 2, nombre: "Té" },
    ];
    const producto = { id: 1, nombre: "Café" };

    expect(2 + 2).toBe(4); // Valor primitivo
    expect(producto).toEqual({ id: 1, nombre: "Café" }); // Objeto
    expect(productos).toContainEqual({ id: 1, nombre: "Café" }); // Contiene objeto
    expect(producto).toHaveProperty("nombre", "Café"); // Propiedad y valor
    expect([]).toBeInstanceOf(Array); // Tipo de dato
    expect(productos).not.toContainEqual({ id: 3, nombre: "Chocolate" }); // Negación
  });
});
```
