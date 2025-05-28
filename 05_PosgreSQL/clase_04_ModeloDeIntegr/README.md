## Tipos de clave

### Primary Key

**Definición:**
La clave primaria es un atributo o un conjunto de atributos que identifican de manera única a cada fila en una tabla de una base de datos. No puede haber dos filas con el mismo valor en la clave primaria, y este valor no puede ser nulo (`NULL`).

**Características:**

1. **Única:** Cada valor de clave primaria debe ser único en la tabla
2. **No Nulo:** Los valores de la clave primaria no pueden ser nulos
3. **Estable:** Los valores de la clave primaria no deben cambiar con el tiempo

```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50)
);
```

### Foreign key

**Definición:**
La clave foránea es un atributo o un conjunto de atributos en una tabla que referencia la clave primaria de otra tabla. Esto se utiliza para crear una relación entre las dos tablas y asegurar la integridad referencial.

**Características:**

1. **Referencial:** La clave foránea apunta a una clave primaria en otra tabla
2. **Integridad:** Asegura que los valores de la clave foránea deben coincidir con los valores de la clave primaria en la tabla referenciada o ser nulos

**Ejemplo:**
Siguiendo con la tabla de "users", supongamos que tenemos una tabla de "pedidos" donde registramos los pedidos realizados por los users:

```sql
CREATE TABLE pedidos(
    id INT PRIMARY KEY,
    user_id INT,
    fecha_pedido DATE,
    total_pedido DECIMAL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Integridad de datos

### Integridad Referencial Clave Foranea

**Definición:**
La integridad referencial es una propiedad de las bases de datos que asegura que las relaciones entre tablas se mantengan coherentes. Esto significa que una clave foránea en una tabla debe coincidir con una clave primaria en otra tabla, o debe ser nula si la relación es opcional.

**Ejemplo:**
Si intentas insertar un pedido en la tabla `pedidos` con un `user_id` que no existe en la tabla `users`, la base de datos impedirá la inserción para mantener la integridad referencial.

```sql
-- Esto fallará si no existe un user con id 3 en la tabla users
INSERT INTO pedidos (id, user_id, fecha_pedido, total_pedido)
VALUES (1, 3, '2024-08-28', 100.00);
```

### Integridad Mediante Clave Primaria

**Definición:**
La integridad mediante clave primaria asegura que cada fila en una tabla sea única y esté identificada de manera inequívoca. Esto es esencial para evitar duplicados y mantener la consistencia de los datos.

**Ejemplo:**
En la tabla `users`, la columna `id` es la clave primaria, lo que asegura que cada `id` es único y no puede haber dos users con el mismo `id`.

```sql
-- Esto fallará si intentas insertar otro user con el mismo id
INSERT INTO users (id, nombre, email)
VALUES (1, 'Juan Perez', 'juan.perez@example.com');
```

### Integridad Mediante Restricciones

**Definición:**
Las restricciones son reglas que aplicas a las columnas de las tablas para asegurar la integridad y validez de los datos. Las restricciones comunes incluyen `NOT NULL`, `UNIQUE`, `CHECK`, y `DEFAULT`.

**Tipos de Restricciones:**

- **NOT NULL:** Asegura que una columna no acepte valores nulos.
- **UNIQUE:** Asegura que todos los valores en una columna o un grupo de columnas sean únicos.
- **CHECK:** Define una condición que los valores en una columna deben cumplir.
- **DEFAULT:** Establece un valor por defecto para una columna cuando no se proporciona ningún valor.


```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50) UNIQUE
);
```

```sql
CREATE TABLE pedidos(
    id INT PRIMARY KEY,
    user_id INT,
    fecha_pedido DATE,
    total_pedido DECIMAL CHECK (total_pedido > 0),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```


## Modelos de Datos: Conceptual, Lógico y Físico

### Modelo de Datos Conceptual

**Definición:**
El modelo de datos conceptual es una representación abstracta de los datos que se centra en describir la estructura general y las relaciones entre entidades sin preocuparse por los detalles técnicos. Es utilizado principalmente en la fase inicial de diseño de la base de datos.

**Características:**

- Representa las entidades principales y sus relaciones.
- No incluye detalles específicos sobre el tipo de base de datos o la implementación.
- Enfocado en qué datos se deben almacenar, no en cómo se almacenan.

**Ejemplo:**
En un sistema de ventas, el modelo conceptual podría identificar las entidades "Cliente", "Pedido", y "Producto", y mostrar que un "Cliente" puede realizar muchos "Pedidos", y que cada "Pedido" puede incluir muchos "Productos".

### Modelo de Datos Lógico

**Definición:**
El modelo de datos lógico es una representación más detallada que el modelo conceptual. Define las estructuras de datos de manera más precisa, incluyendo las claves primarias y foráneas, pero sigue siendo independiente del tipo de base de datos que se usará.

**Características:**

- Define tablas, columnas, claves primarias y foráneas.
- Describe la estructura lógica de la base de datos sin especificar detalles físicos como índices o particiones.
- Se utiliza como paso intermedio antes de la implementación física.

**Ejemplo:**
Basado en el modelo conceptual anterior, el modelo lógico podría definir las tablas "Clientes", "Pedidos" y "Productos", con detalles como los tipos de datos y las relaciones entre ellas, utilizando claves primarias y foráneas.

### Modelo de Datos Físico

**Definición:**
El modelo de datos físico describe cómo los datos se almacenan realmente en la base de datos. Incluye detalles específicos de la implementación, como el tipo de base de datos, índices, particiones, y otras optimizaciones de rendimiento.

**Características:**

- Define cómo se almacenan los datos físicamente en el sistema.
- Incluye detalles específicos de la implementación como índices, compresión, y estructura de almacenamiento.
- Está completamente ligado a la tecnología de base de datos seleccionada (SQL Server, PostgreSQL, MySQL, etc.).

**Ejemplo:**
El modelo físico podría especificar que la tabla "Clientes" se almacenará en un archivo particular, con un índice en la columna `email` para acelerar las búsquedas, y con ciertas configuraciones de compresión para optimizar el uso del espacio.

LINK AL EJEMPLO GRAFICO [LUDMI]("https://lucid.app/lucidchart/0695574e-5955-4dac-8aa7-3f770adadbce/edit?invitationId=inv_b78712f5-9581-4acf-8612-d6d2dbcac7a5&page=0_0#")
