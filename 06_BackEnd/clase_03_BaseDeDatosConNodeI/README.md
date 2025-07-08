### 1. `Pool`:

- **Descripción**: `Pool` es una clase que pertenece al paquete **pg** (el módulo de PostgreSQL para Node.js) y se utiliza para gestionar las conexiones con la base de datos. Un "pool" de conexiones permite reutilizar conexiones a la base de datos, en lugar de abrir una nueva conexión cada vez que se realiza una consulta. Esto mejora el rendimiento y la eficiencia de las aplicaciones que necesitan realizar múltiples consultas a la base de datos.

- **Ejemplo**:
  ```javascript
  const { Pool } = require("pg");
  ```
  Aquí importas la clase `Pool` desde el módulo `pg` para que puedas crear un conjunto de conexiones a la base de datos.

### 2. `pool`:

- **Descripción**: `pool` es una instancia de la clase `Pool` que creas al pasarle las configuraciones necesarias para conectarse a tu base de datos PostgreSQL. Esta instancia se utiliza para realizar consultas a la base de datos.

- **Configuración de `pool`**:
  ```javascript
  const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "plan_de_viajes",
    allowExitOnIdle: true,
  });
  ```
  - `host`: Especifica el servidor donde está alojada la base de datos. En este caso, es `localhost` (el servidor local).
  - `user`: El nombre de usuario que usas para conectarte a la base de datos (en este caso, `postgres`).
  - `password`: La contraseña para el usuario `postgres`.
  - `database`: El nombre de la base de datos a la que te conectas (en este caso, `plan_de_viajes`).
  - `allowExitOnIdle`: Indica si el cliente debe cerrar la conexión automáticamente cuando no haya más consultas en la cola.

### 3. `pool.query()`:

- **Descripción**: `pool.query()` es el método que se utiliza para ejecutar consultas SQL en la base de datos. Este método recibe una cadena de consulta SQL y, opcionalmente, un conjunto de valores que se pasan de forma segura para evitar inyecciones de SQL.
- **Ejemplo básico**:
  ```javascript
  const result = await pool.query("SELECT NOW()");
  ```
  En este caso, `pool.query` está ejecutando una consulta que obtiene la fecha y hora actuales del servidor de base de datos usando `SELECT NOW()`.

### 4. `result`:

- **Descripción**: `result` es el objeto que contiene el resultado de una consulta a la base de datos. Al usar `await`, la función espera hasta que la consulta haya terminado, y entonces almacena el resultado en `result`. Este objeto tiene varias propiedades útiles.

- **Propiedades comunes de `result`**:
  - **`result.rows`**: Es un arreglo de objetos, donde cada objeto representa una fila de la base de datos obtenida como resultado de la consulta.
  - **`result.rowCount`**: El número de filas afectadas o devueltas por la consulta.
  - **`result.command`**: El comando SQL que se ejecutó (por ejemplo, `SELECT`, `INSERT`, etc.).

### 5. `result.rows`:

- **Descripción**: `result.rows` es la propiedad más importante del objeto `result`. Es un array de objetos, donde cada objeto representa una fila obtenida de la base de datos. Cada clave en los objetos de este arreglo es una columna de la tabla de la base de datos.

- **Ejemplo**:
  ```javascript
  console.log(result.rows);
  ```
  Esto imprimirá un arreglo con las filas devueltas por la consulta SQL.

---

### Funciones Explicadas

#### Función 1: `getDate`:

- **Descripción**: Esta función ejecuta una consulta que obtiene la fecha y hora actuales del servidor de la base de datos.

- **Código**:

  ```javascript
  const getDate = async () => {
    const result = await pool.query("SELECT NOW()");
    console.log(result);
  };
  getDate();
  ```

- **Explicación**:
  - La consulta `SELECT NOW()` devuelve la fecha y hora actuales del servidor de la base de datos.
  - `await pool.query("SELECT NOW()")` hace que la función espere hasta que se complete la consulta.
  - `console.log(result)` imprime el resultado completo, que incluye detalles sobre la consulta, como el número de filas y los datos obtenidos.
  - **Propiedad importante**: `result.rows` contendrá la fecha actual en un objeto (ej. `[{ now: '2024-09-12 10:30:00' }]`).

#### Función 2: `agregarViaje`:

- **Descripción**: Esta función inserta un nuevo registro en la tabla `viajes` de la base de datos. Los parámetros `destino` y `presupuesto` son los datos que se insertan en la tabla.

- **Código**:

  ```javascript
  const agregarViaje = async (destino, presupuesto) => {
    const consulta = "INSERT INTO viajes values (DEFAULT, $1, $2)";
    const values = [destino, presupuesto];
    const result = await pool.query(consulta, values);
    console.log("Viaje agregado");
  };
  ```

- **Explicación**:
  - `consulta`: Define la consulta SQL que insertará un nuevo registro en la tabla `viajes`. La palabra clave `DEFAULT` se utiliza para el `id` autoincrementable.
  - `values`: Es un array que contiene los valores que se insertarán en los placeholders `$1` y `$2`. Estos valores son seguros y previenen inyecciones SQL.
  - `await pool.query(consulta, values)`: Ejecuta la consulta utilizando los valores proporcionados.
  - `console.log("Viaje agregado")`: Muestra un mensaje en la consola una vez que la consulta se ha completado.

#### Función 3: `obtenerViajes`:

- **Descripción**: Esta función recupera todas las filas de la tabla `viajes` y las devuelve.

- **Código**:

  ```javascript
  const obtenerViajes = async () => {
    const { rows } = await pool.query("SELECT * FROM viajes");
    console.log(rows);
    return rows;
  };
  obtenerViajes();
  ```

- **Explicación**:
  - La consulta `SELECT * FROM viajes` selecciona todas las columnas y filas de la tabla `viajes`.
  - `const { rows } = await pool.query(...)`: Desestructura el objeto resultante de la consulta, tomando únicamente la propiedad `rows`, que contiene todas las filas devueltas.
  - `console.log(rows)`: Imprime las filas obtenidas de la tabla `viajes`.
  - `return rows`: Devuelve el arreglo de filas (útil si necesitas usar los datos en otro lugar de tu aplicación).

---

### Resumen:

- **`Pool`**: Clase que gestiona las conexiones a la base de datos.
- **`pool`**: Instancia del `Pool` que se utiliza para ejecutar consultas en la base de datos.
- **`pool.query()`**: Método que ejecuta consultas SQL.
- **`result`**: Objeto que contiene el resultado de una consulta SQL.
- **`result.rows`**: Un arreglo de objetos, cada uno representando una fila de la base de datos.
- **Funciones `getDate`, `agregarViaje`, `obtenerViajes`**: Son ejemplos de funciones que realizan consultas SQL a la base de datos, ya sea para obtener datos o para insertar nuevos registros.

---

# Ejercicios

# Proyecto: Gestión de Usuarios con PostgreSQL y Node.js

## Descripción

Este proyecto consiste en la creación de una base de datos que almacene información de usuarios y permita realizar las siguientes operaciones a través de una API utilizando Node.js y PostgreSQL.

## Requisitos

1. Crear una base de datos llamada `gestion_usuarios`.
2. Crear una tabla `usuarios` con las siguientes columnas:
   - `id` (entero, clave primaria, auto-incremental)
   - `nombre` (cadena, no nulo)
   - `apellido` (cadena, no nulo)
   - `edad` (entero, no nulo)
   - `pais` (cadena, no nulo)

## Consultas

### Obligatorias:

- **Agregar un usuario**: Agregar un usuario individualmente mediante una solicitud `POST` a la ruta `/usuarios`.
- **Obtener todos los usuarios**: Devolver todos los usuarios registrados mediante una solicitud `GET` a la ruta `/usuarios`.
- **Obtener usuarios mayores de edad**: Devolver solo a los usuarios con 18 años o más mediante una solicitud `GET` a la ruta `/usuarios/mayores`.
- **Obtener usuarios por país**: Devolver los usuarios pertenecientes a un país específico mediante una solicitud `GET` a la ruta `/usuarios/:pais`.

## Rutas

- `/usuarios`: Para obtener a todos los usuarios.
- `/usuarios/mayores`: Para obtener a todos los usuarios Mayores de edad.
- `/usuarios/:pais`: Para filtrar usuarios por un país específico.
