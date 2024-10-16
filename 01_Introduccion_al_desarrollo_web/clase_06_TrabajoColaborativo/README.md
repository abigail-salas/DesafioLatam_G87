### ¿Cómo subir una página a GitHub Pages?

1. Crea un repositorio en GitHub.
2. Asegúrate de que el nombre del repositorio siga la estructura `username.github.io`. Por ejemplo, si tu usuario es `camila`, tu repositorio debería llamarse `camila.github.io`.
3. Sube tu página web al repositorio.
4. Publica el sitio desde la pestaña de **Settings** > **Pages**, seleccionando la rama desde la cual quieres desplegar el sitio (normalmente `main` o `gh-pages`).

### Agregando un remote

Si tienes un repositorio local sin un remote configurado, puedes añadirlo con:

```bash
git remote add origin git@github.com:usuario/usuario.github.io.git
```

Luego, para subir los cambios, utiliza:

```bash
git push origin main
```

Finalmente, accede a `usuario.github.io` para ver tu página en vivo.

---

## Conceptos Basicos de Git

- Lista todas las ramas locales que hay en el repositorio. Resalta la actual con un asterisco

```bash
git branch
```

- Para crear una rama nueva

```bash
git branch nombreDeRama
```

- Se utiliza para cambiar entre las ramas del repositorio

```bash
git checkout nombreDeRama
```

- Crear y cambiar a una rama nueva con un solo comando

```bash
git checkout -b nombreDeRama
```

- Traer todos los cambios desde la rama

```bash
git pull origin nombreDeRama
```

## Colaboración en GitHub

### 1. ¿Hacer un fork o no?

- **Fork**: Hacer un fork de un repositorio es útil cuando no tienes permisos para colaborar en el repo original. Un fork crea una copia del repositorio en tu cuenta de GitHub

- **Colaboradores**: Si has sido agregado como colaborador en el repositorio, **NO necesitas hacer un fork**. Puedes trabajar directamente en el repositorio original, lo cual es más eficiente

### 2. Clonar el repositorio

```bash
git clone git@github.com:usuario/repositorio.git
```

### 3. Creación y uso de ramas

Para evitar conflictos al trabajar en el mismo proyecto, **cada colaborador debe trabajar en su propia rama**

1. Primero, asegúrate de estar en la rama principal (`main` o `master`) y que tu copia local esté actualizada:

```bash
git checkout main
git pull origin main
```

2. Luego crea una nueva rama para tu trabajo. Esta rama debe tener un nombre descriptivo de la funcionalidad

```bash
git checkout -b nombreDeRama
```

### 4. Subir y fusionar cambios

1. Desde tu rama, puedes comenzar a trabajar y realizar commits con los cambios. Luego lo subiras desde tu propia rama

```bash
git add .
git commit -m "Comentario relacionado"
git push origin nombreDeRama
```

#### 5. Abrir un Pull Request (PR)

Si estás trabajando en un **fork**, deberás abrir un Pull Request (PR) desde tu repositorio hacia el repositorio original.

Si eres colaborador, abre un PR directamente en el repositorio principal desde tu rama hacia la rama `main` o la rama principal del proyecto.

El equipo revisará tus cambios y podrá comentar o pedir ajustes antes de fusionar tu trabajo.

### 6. Actualizar tu rama con los últimos cambios

Es importante que, antes de fusionar tu rama en `main`, te asegures de tener los cambios más recientes del repositorio remoto.

1. Desde tu rama de trabajo, debes traer los cambios de la rama `main` para evitar conflictos cuando se intente fusionar tu PR:

```bash
git checkout main
git pull origin main
```

2. Luego, vuelve a tu rama de trabajo y fusiona los cambios de la rama `main` en ella:

```bash
git checkout nombreDeRama
git merge main
```

Resuelve cualquier conflicto que surja durante la fusión.

3. Después de resolver los conflictos, sube los cambios:

```bash
git add .
git commit -m "Resolví conflictos con la rama main"
git push origin nombreDeRama
```

Una vez hecho esto, tu rama estará actualizada con los últimos cambios y lista para fusionarse en la rama principal.

### 7. Fusionar ramas en la principal

Cuando el equipo esté de acuerdo en que la funcionalidad de tu rama está completa y ha sido revisada, puedes fusionar tu rama en `main`.

Desde la rama `main`, ejecuta:

```bash
git merge nombreDeRama
```

Por último, sube la rama principal actualizada al repositorio remoto:

```bash
git push origin main
```

> [!CAUTION]
> Los merge y PR se pueden hacer directamente desde a pagina de github
