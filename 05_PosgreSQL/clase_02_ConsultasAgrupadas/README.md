### Creacion de base de datos

- `CREATE DATABASE database_monedas`

### Conectarse a la base de datos

- `\c database_monedas`

### Listar todas las bases de datos

- `\l`

### Crear la tabla monedas

- `CREATE TABLE monedas (nombre VARCHAR(50));`

### Listar todas las tablas

- `\dt`

### Insertar datos a la tabla monedas

```
INSERT INTO moneda (nombre) VALUES
('Guarani'),
('Rupiah'),
('Ruble'),
('Peso'),
('Peso'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Yuan Renminbi'),
('Euro'),
('Ariary'),
('Denar'),
('Rupiah'),
('Ruble'),
('Yuan Renminbi'),
('Lek');

```

### Verificar los datos ingresados

- `SELECT * FROM monedas;`

## Consutas y REPORTES

- ### Selecciones

  - `SELECT count(*) FROM monedas;`

    > Contamos todos los registros

  - `SELECT count(*) FROM monedas where nombre = 'Peso'`

    > Contamos todos los registros cuya nombre sea Peso

  - `SELECT count(*) FROM monedas where nombre = 'Peso' or nombre = 'Euro'`

    > Contamos todos los registros cuya nombre sea Peso o Euro

  - `SELECT distinct(nombre) FROM monedas`

    > Listamos todas las monedas con distinto nombre

  - `SELECT count(distinct(nombre)) FROM monedas`

    > Contamos todas las monedas con distinto nombre

  - `SELECT nombre, count(*) FROM monedas group by nombre;`

    > Listar cuantas veces aparece cada registrp repetido

### Crear la tabla monedas

- `CREATE TABLE ventas (categoria VARCHAR(50), monto INT);`

### Listar todas las tablas

- `\dt`

### Insertar datos a la tabla monedas

```
INSERT INTO ventas (categoria, monto) values
('Books', 214),
('Games', 293),
('Baby', 241),
('Tools', 719),
('Tools', 385),
('Movies', 882),
('Outdoors', 654),
('Baby', 332),
('Grocery', 332),
('Toys', 952),
('Games', 682),
('Books', 527),
('Kids', 980),
('Grocery', 300);

```

### Verificar los datos ingresados

- `SELECT * FROM ventas;`

## Comando para tablas agrupadas

- `SELECT nombre, count(*) FROM monedas group by nombre;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `GROUP BY` | Agrupa los resultados por el valor de la columna nombre, permitiendo realizar operaciones de agregación en cada grupo. |

- `SELECT SUM(monto) AS total_monto FROM ventas;` Calcular la suma total de todos los montos en la tabla ventas:
  | Comando | Descripcion |
  | :---: | ---- |
  | `SUM()` | Calcula la suma total de todos los valores en la columna monto. |

- `SELECT categoria, SUM(monto) AS total_monto FROM ventas GROUP BY categoria;` Suma los montos por categoria en la tabla ventas

- `SELECT categoria, AVG(monto) AS promedio_monto FROM ventas GROUP BY categoria;` Calcula el monto promedio por categoria en la tabla ventas
  | Comando | Descripcion |
  | :---: | ---- |
  | `AVG()` | Calcula el valor promedio de todos los valores en la columna monto para cada categoría.|

- `SELECT MAX(monto) AS monto_maximo FROM ventas;` Encuentra el monto maximo en la tabla ventas
  | Comando | Descripcion |
  | :---: | ---- |
  | `MAX()` | Encuentra el valor máximo en la columna monto.|

- `SELECT categoria, MIN(monto) AS monto_minimo FROM ventas GROUP BY categoria;` Encuentra el monto minimo en la tabla ventas
  | Comando | Descripcion |
  | :---: | ---- |
  | `MIN()` | Encuentra el valor mínimo en la columna monto para cada categoría.|

## Diferencia entre WHERE Y HAVING

- `SELECT categoria, monto FROM ventas WHERE monto > 500` Muestra todas las ventas donde monto sea mayor a 500
  | Comando | Descripcion |
  | :---: | ---- |
  | `WHERE` | Filtra los registros de la tabla ventas y solo muestra aquellos donde el monto sea mayor a 500 |

- `SELECT categoria, SUM(monto) AS total_monto FROM ventas  GROUP BY categoria HAVING SUM(monto) > 1000;` Muestra la categoria de ventas donde tienen un monto total o superor a 1000
  | Comando | Descripcion |
  | :---: | ---- |
  | `HAVING` | Filtra las categorias de venta despues de aplicar la funcion `SUM` |

- `SELECT categoria, SUM(monto) as total_monto FROM ventas WHERE monto > 200 GROUP BY categoria HAVING SUM(monto) > 1000;`
  | Comando | Descripcion |
  | :---: | ---- |
  | `HAVING` | Filtra las categorías agrupadas donde la suma total `(SUM(monto))` es superior a 1000. |
  | `WHERE` | Filtra las ventas individuales donde monto es mayor a 200. |

### COMPARACION

| `WHERE`                                                                                                                                             | `HAVING`                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Se usa para filtrar registros antes de cualquier operación de agrupamiento. No se puede usar con funciones de agregado como SUM o AVG directamente. | Se usa para filtrar grupos de registros, después de que se haya aplicado una operación de agrupamiento. Se utiliza principalmente con funciones de agregado para restringir los resultados agrupados. |

## REALIZAR SUBCONSULTAS

- `SELECT categoria, monto FROM ventas WHERE monto > (SELECT AVG(monto) FROM ventas);` Encuentra todas las categorias de ventas cuyyo
  | Comando | Descripcion |
  | :---: | ---- |
  | `WHERE` |Filtra las ventas donde el monto es mayor al promedio calculado por la subconsulta (SELECT AVG(monto) FROM ventas). |

- `SELECT categoria FROM ventas WHERE categoria IN (SELECT nombre FROM monedas)`
  | Comando | Descripcion |
  | :---: | ---- |
  | `IN` | Filtra las categorías de ventas que coinciden con algún nombre en la tabla monedas. |

--------------------------------------------------------------------------------------------------------------------

# Ejercicio Práctico

Estás gestionando una tienda en línea que vende productos de diferentes categorías. Quieres analizar los datos de ventas realizadas para generar reportes y estadísticas que te ayuden a entender mejor tu negocio.

1. Crear una tabla de `productos` con los siguientes campos:

   - `ID` (clave primaria, tipo serial) (id SERIAL PRIMARY KEY)
   - `nombre` (varchar de hasta 100 caracteres)
   - `categoria` (varchar de hasta 50 caracteres)
   - `precio` (entero)

2. Crear una tabla de `ventas` con los siguientes campos:

   - `id` (clave primaria, tipo serial)
   - `producto_id` (entero, referencia a `productos.id`) (producto_id INT REFERENCES productos.id)
   - `cantidad` (entero)
   - `fecha_venta` (tipo date)

3. Insertar datos en la tabla `productos`:

   ```sql
   INSERT INTO productos (nombre, categoria, precio) VALUES
   ('Laptop', 'Electrónica', 1200),
   ('Celular', 'Electrónica', 800),
   ('Escritorio', 'Muebles', 200),
   ('Silla', 'Muebles', 150),
   ('Cámara', 'Electrónica', 500),
   ('Libreta', 'Papelería', 10),
   ('Marcador', 'Papelería', 5);
   ```

4. Insertar datos en la tabla `ventas`:

   ```sql
   INSERT INTO ventas (producto_id, cantidad, fecha_venta) VALUES
   (1, 3, '2024-10-01'),
   (2, 2, '2024-10-01'),
   (3, 1, '2024-10-02'),
   (4, 4, '2024-10-02'),
   (5, 2, '2024-10-03'),
   (6, 5, '2024-10-04'),
   (7, 10, '2024-10-04');
   ```

5. **Calcular el total de productos vendidos por categoría**:

   - Usa `GROUP BY` y `SUM` para calcular cuántos productos se han vendido por cada categoría.

6. **Mostrar las categorías que han vendido más de 10 productos**:

   - Usa `GROUP BY` y `HAVING` para filtrar los grupos cuyo total vendido sea mayor a 10.

7. **Calcular el precio promedio de todos los productos**:

   - Utiliza la función `AVG` para calcular el precio promedio.

8. **Listar los productos cuyo precio es mayor que el precio promedio**:

   - Realiza una subconsulta para encontrar el precio promedio y usa `WHERE` para filtrar los productos.

9. **Contar cuántos productos hay en cada categoría**:

   - Usa `GROUP BY` y `COUNT` para contar cuántos productos hay en cada categoría.

10. **Listar las ventas realizadas después del 2 de octubre de 2024**:

    - Usa `WHERE` para filtrar las ventas por fecha.

11. **Encontrar el producto con el precio más alto y más bajo**:

    - Usa las funciones `MAX` y `MIN` para encontrar el precio máximo y mínimo.

12. **Mostrar los nombres de las categorías de productos con nombres que contengan la letra "a"**:

    - Usa `DISTINCT` y `LIKE` para filtrar por patrones de texto.

13. **Listar las categorías con un total de ingresos (precio \* cantidad) mayor a 2000**:

    - Usa `GROUP BY`, `SUM`, y `HAVING` para calcular los ingresos por categoría y filtrar los resultados.
