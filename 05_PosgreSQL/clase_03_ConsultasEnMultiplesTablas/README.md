## Resumen de Todos los Joins

- ### INNER JOIN

  Devuelve solo las filas con coincidencias entre ambas tablas

- ### LEFT JOIN

  Devuelve todas las filas de la tabla de la izquierda, con las filas coincidentes de la tabla de la derecha, o NULL si no hay coincidencias

- ### FULL JOIN

  Devuelve todas las filas de ambas tablas, con NULL en los valores que no tienen coincidencias.

- ### CROSS JOIN

  Devuelve TODAS las combinaciones posibles entre ambas tablas

## EJERCICIO

### Preparacion de la Base de Datos, Tablas y Valores

1. **Crear la base de datos**:

   ```sql
   CREATE DATABASE blog_y_tienda;
   ```

2. **Conectarse a la base de datos creada**:

   ```sql
   \c blog_y_tienda
   ```

3. **Crear las siguientes tablas**:

   - Tabla `posts` (Publicaciones del blog):

     ```sql
     CREATE TABLE posts(
       id SERIAL PRIMARY KEY,
       title VARCHAR(100),
       content TEXT
     );
     ```

   - Tabla `comments` (Comentarios en publicaciones):

     ```sql
     CREATE TABLE comments(
       id SERIAL PRIMARY KEY,
       content TEXT,
       post_id INTEGER REFERENCES posts(id)
     );
     ```

   - Tabla `productos` (Productos de la tienda):

     ```sql
     CREATE TABLE productos(
       id SERIAL PRIMARY KEY,
       nombre VARCHAR(100),
       precio INT
     );
     ```

   - Tabla `ventas` (Ventas de productos):

     ```sql
     CREATE TABLE ventas(
       id SERIAL PRIMARY KEY,
       producto_id INTEGER REFERENCES productos(id),
       cantidad INT,
       fecha_venta DATE
     );
     ```

4. **Insertar datos en las tablas**:

   - Insertar registros en la tabla `posts`:

     ```sql
     INSERT INTO posts (title, content) VALUES
     ('Post 1', 'Contenido del primer post'),
     ('Post 2', 'Contenido del segundo post'),
     ('Post 3', 'Contenido del tercer post');
     ```

   - Insertar registros en la tabla `comments`:

     ```sql
     INSERT INTO comments (content, post_id) VALUES
     ('Comentario 1 en Post 1', 1),
     ('Comentario 2 en Post 1', 1),
     ('Comentario 1 en Post 2', 2),
     ('Comentario 1 en Post 3', 3);
     ```

   - Insertar registros en la tabla `productos`:

     ```sql
     INSERT INTO productos (nombre, precio) VALUES
     ('Laptop', 1000),
     ('Celular', 800),
     ('Escritorio', 200),
     ('Silla', 150);
     ```

   - Insertar registros en la tabla `ventas`:

     ```sql
     INSERT INTO ventas (producto_id, cantidad, fecha_venta) VALUES
     (1, 2, '2024-10-01'),
     (2, 1, '2024-10-02'),
     (3, 3, '2024-10-03'),
     (4, 1, '2024-10-04');
     ```

### Consultas con JOINs y Subconsultas

1. **INNER JOIN** - Mostrar todas las publicaciones con sus comentarios:

   - Consulta para obtener todas las publicaciones y sus comentarios, utilizando un `INNER JOIN`.

2. **LEFT JOIN** - Mostrar todas las publicaciones con comentarios (o NULL si no tienen):

   - Usa un `LEFT JOIN` para mostrar todas las publicaciones, incluso aquellas sin comentarios (donde los comentarios serán `NULL`).

3. **FULL JOIN** - Mostrar todas las publicaciones y todos los comentarios, incluso si no coinciden:

   - Realiza una consulta que incluya todas las publicaciones y todos los comentarios, incluso si no tienen coincidencia.

4. **CROSS JOIN** - Mostrar todas las combinaciones posibles entre publicaciones y comentarios:

   - Realiza una consulta con `CROSS JOIN` que genere un producto cartesiano entre las publicaciones y los comentarios.

5. **Subconsulta** - Mostrar los productos cuyo precio es mayor al promedio:

   - Realiza una subconsulta para encontrar los productos cuyo precio es mayor al precio promedio de todos los productos.

6. **INNER JOIN** con función de agregación - Mostrar el total de ventas por producto:

   - Muestra cuántas unidades se han vendido de cada producto, utilizando `INNER JOIN` y la función de agregación `SUM()`.

### Consultas Avanzadas con Subconsultas y Condicionales

1. **Mostrar las publicaciones que no tienen ningún comentario**:

   - Usa un `LEFT JOIN` y una condición para mostrar las publicaciones que no tienen comentarios.

2. **Mostrar las publicaciones que tienen más de 1 comentario**:

   - Utiliza `GROUP BY` y `HAVING` para mostrar solo las publicaciones que tienen más de un comentario.

3. **Contar el total de combinaciones posibles entre publicaciones y comentarios (CROSS JOIN)**:

   - Utiliza un `CROSS JOIN` para contar cuántas combinaciones posibles existen entre las publicaciones y los comentarios.
