## EXPRESS

Express Js es un framework de JavaScript para la creación de servidores y API REST en un entorno Node Js

### Servidor Web

Es una aplicación backend creada para recibir solicitudes de aplicaciones clientes y devolver información o inclusive sitios web.

**_Inicializar un servidor con express_**

- Inicializacion: `npm init -y`

  > No puede tener mayusculas la carpeta

- Instalacion: `npm i express`

### Metodos HTTPS

Los métodos HTTP son las principales formas en las que los clientes (navegadores u otras aplicaciones) interactúan con los servidores web.

1. **GET**

   - **Descripción**: El método **GET** se utiliza para solicitar datos de un servidor sin modificar ni alterar los datos en el servidor.

   - **Usos comunes**:

     - Obtener información de una API (como obtener una lista de productos, usuarios, etc.).
     - Mostrar información en páginas web sin realizar cambios en los datos.

   - **Ejemplo**:

     ```js
     app.get("/home", (req, res) => {
       res.send("Hello World Express Js");
     });
     ```

     En este ejemplo, la solicitud GET a `/home` pedirá al servidor una vista de home.

   - **Idempotencia**: Es **idempotente**, lo que significa que llamar a la misma operación varias veces no cambia el resultado o los datos.

2. **POST**

   - **Descripción**: El método **POST** se utiliza para enviar datos al servidor y crear nuevos recursos. A diferencia de GET, POST puede cambiar el estado del servidor al agregar información nueva.

   - **Usos comunes**:
     - Enviar formularios (como registrar un nuevo usuario o agregar un nuevo producto).
     - Crear un nuevo recurso en la base de datos.
   - **Ejemplo**:
     ```bash
     POST /productos
     Body:
     {
       "nombre": "Laptop",
       "precio": 1200
     }
     ```
     Aquí se está enviando una solicitud para agregar un nuevo producto con los datos enviados en el cuerpo (nombre y precio).
   - **Idempotencia**: **No es idempotente**, lo que significa que hacer la misma solicitud varias veces puede dar lugar a la creación de múltiples recursos.

3. **PUT**

   - **Descripción**: El método **PUT** se utiliza para actualizar un recurso existente en el servidor o crear uno si no existe (aunque crear con PUT es menos común).

   - **Usos comunes**:
     - Actualizar la información completa de un recurso existente.
     - Reemplazar completamente el estado de un recurso con nuevos datos.
   - **Ejemplo**:

     ```bash
     PUT /productos/1
     Body:
     {
       "nombre": "Laptop",
       "precio": 1300
     }
     ```

     En este ejemplo, se está actualizando el producto con id `1`, reemplazando su información actual con los datos enviados (nombre y precio).

   - **Idempotencia**: Es **idempotente**, lo que significa que realizar la misma operación varias veces producirá el mismo resultado (la actualización del recurso será siempre la misma, independientemente de cuántas veces se realice).

4. **DELETE**

   - **Descripción**: El método **DELETE** se utiliza para eliminar un recurso en el servidor.

   - **Usos comunes**:

     - Eliminar un recurso de la base de datos (como borrar un producto o eliminar una cuenta de usuario).

   - **Ejemplo**:
     ```bash
     DELETE /productos/1
     ```
     Esta solicitud eliminará el producto con id `1` del servidor.
   - **Idempotencia**: Es **idempotente**, ya que realizar la operación varias veces no cambiará el estado después de la primera eliminación. Si el recurso ya fue eliminado, no volverá a eliminarse.

### Resumen comparativo:

| Método     | Descripción                                | Idempotente |
| ---------- | ------------------------------------------ | ----------- |
| **GET**    | Solicitar información sin modificar nada   | Sí          |
| **POST**   | Crear un nuevo recurso en el servidor      | No          |
| **PUT**    | Actualizar/reemplazar un recurso existente | Sí          |
| **DELETE** | Eliminar un recurso del servidor           | Sí          |

# Introducción a Express.js

## Comandos útiles

- `npm init -y`: Inicia un proyecto Node.js.
- `npm install express`: Instala Express.js.
- `node index.js`: Levanta el servidor.

### 1. `app`:

- **Descripción**: `app` es la instancia de la aplicación Express. Es el objeto principal que se usa para configurar y manejar el servidor. Cuando llamas a `express()`, estás creando una nueva aplicación de Express. A través de esta instancia, puedes definir rutas, configurar middleware, manejar solicitudes y respuestas, entre otras cosas.

- **Ejemplo**:
  ```javascript
  const app = express(); // Crea la aplicación Express
  ```

### 2. `app.listen(3000, console.log("¡Servidor encendido!"))`:

- **Descripción**: `app.listen` se utiliza para iniciar el servidor. Este método le dice a la aplicación Express que escuche las conexiones en un puerto específico (en este caso, el puerto `3000`). Cuando el servidor comienza a escuchar, se ejecuta una función de callback que en este caso imprime en la consola `"¡Servidor encendido!"`.
- **Parámetros**:
  - `3000`: El número de puerto donde el servidor escuchará las solicitudes HTTP. Puedes cambiarlo por otro puerto si lo prefieres.
  - `console.log("¡Servidor encendido!")`: Una función de callback que se ejecuta cuando el servidor está listo para recibir conexiones.
- **Ejemplo**:
  ```javascript
  app.listen(3000, () => {
    console.log("Servidor encendido en el puerto 3000");
  });
  ```

### 3. `app.get("/home", (req, res) => { ... })`:

- **Descripción**: `app.get` define una ruta que responde a las solicitudes HTTP **GET** en la ruta `/home`. Cuando un cliente envía una solicitud GET a `http://localhost:3000/home`, se ejecuta la función de callback `(req, res)` que maneja la solicitud y envía una respuesta.
- **Parámetros**:
  - `"/home"`: La ruta de la URL que el servidor escuchará. En este caso, es `/home`.
  - `(req, res) => { ... }`: La función de callback que se ejecuta cuando el servidor recibe una solicitud GET en la ruta `/home`. Esta función tiene dos parámetros importantes:
    - `req`: El objeto de solicitud (request).
    - `res`: El objeto de respuesta (response).
- **Ejemplo**:
  ```javascript
  app.get("/about", (req, res) => {
    res.send("Esta es la página Acerca de");
  });
  ```

### 4. `req` (Request):

- **Descripción**: `req` es el objeto de **solicitud**. Representa la información enviada por el cliente (navegador, API, etc.) al servidor. Contiene detalles sobre la solicitud HTTP, como la URL solicitada, los encabezados, los parámetros de la URL, el cuerpo de la solicitud (para métodos como POST) y más.
- **Usos comunes de `req`**:

  - `req.params`: Parámetros de ruta.
  - `req.query`: Parámetros de consulta en la URL (después del `?`).
  - `req.body`: Datos enviados en el cuerpo de la solicitud (para POST, PUT, etc.).

- **Ejemplo**:
  ```javascript
  app.get("/user/:id", (req, res) => {
    const userId = req.params.id; // Obtiene el parámetro "id" de la URL
    res.send(`Usuario con ID: ${userId}`);
  });
  ```

### 5. `res` (Response):

- **Descripción**: `res` es el objeto de **respuesta**. Se utiliza para enviar la respuesta de vuelta al cliente. Este objeto tiene varios métodos para enviar información al cliente, como `res.send()`, `res.json()`, `res.status()`, entre otros. Controla lo que el servidor devuelve al navegador o a la aplicación cliente.
- **Ejemplo de métodos comunes**:
  - `res.send()`: Enviar una respuesta de texto o HTML.
  - `res.json()`: Enviar una respuesta en formato JSON.
  - `res.status()`: Definir el código de estado HTTP (como 200, 404, 500).

### 6. `res.send("Hello World Express Js")`:

- **Descripción**: `res.send()` es un método que se utiliza para enviar la respuesta HTTP al cliente. En este caso, está enviando el texto `"Hello World Express Js"`. El navegador o cliente que hizo la solicitud recibirá este texto como respuesta.
- **Uso**:
  - Cuando se llama a `res.send()`, se finaliza la solicitud, y el servidor envía el contenido al cliente.
- **Ejemplo**:
  ```javascript
  res.send("¡Hola Mundo!");
  ```

### Resumen del flujo del código:

1. Se crea una aplicación Express (`app`).
2. El servidor comienza a escuchar en el puerto 3000 (`app.listen`).
3. Cuando un cliente solicita la ruta `/home` con el método GET, se ejecuta la función que maneja esa ruta (`app.get`).
4. El objeto `req` contiene la solicitud del cliente.
5. El objeto `res` se utiliza para enviar la respuesta `"Hello World Express Js"` de vuelta al cliente (`res.send()`).
