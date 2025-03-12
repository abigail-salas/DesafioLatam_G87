# ✅ Flujo de trabajo con ramas para cada hito en GitHub

## 🚀 1. Preparación: Crear y clonar el repositorio

### 🔹 Si el repositorio ya está creado

```bash
git clone git@github.com:usuario/proyecto.git
```

### 🔹 Si aún no tienen repositorio

Deben crearlo en GitHub y luego hacer:

```bash
git init
git remote add origin git@github.com:usuario/proyecto.git
```

## 🏗 2. Creación de ramas por cada hito

Cada hito se trabaja en una rama diferente para que los cambios no afecten la rama principal (`main`) hasta que estén completos.

1. **Asegurarse de estar en la rama `main` y traer los últimos cambios**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Crear una nueva rama para el hito actual**

   ```bash
   git checkout -b hito-1
   ```

   📌 Esto crea y cambia a la rama `hito-1`.

3. **Verificar en qué rama están**

   ```bash
   git branch
   ```

   📌 Aparecerá una lista de ramas y la actual estará marcada con un `*`.

## 📝 3. Trabajar en el hito y hacer commits

Cada vez que realicen cambios, deberan hacer lo siguiente:

```bash
git add .

git commit -m "Commit de ejemplo para el hito 1"

git push origin hito-1
```

📌 (OPCIONAL) _Si es la primera vez que suben esta rama, Git les indicará que deben ejecutar:_

```bash
git push --set-upstream origin hito-1
```

## 🔄 4. Fusionar un hito en la rama `main`

Cuando un hito esté completo y aprobado, deben integrarlo en la rama principal (`main`).

1. **Cambiar a la rama `main`**

   ```bash
   git checkout main
   ```

2. **Traer los últimos cambios del repositorio**

   ```bash
   git pull origin main
   ```

3. **Fusionar la rama del hito en `main`**

   ```bash
   git merge hito-1
   ```

4. **Subir la rama `main` actualizada al repositorio**

   ```bash
   git push origin main
   ```

## 🔄 5. Actualizar tu rama con los cambios de `main`

Si están trabajando en un nuevo hito (`hito-2`) y quieren asegurarse de que tienen la última versión del código, deben fusionar los cambios de `main` en su nueva rama.

1. **Ir a la rama `main` y traer los últimos cambios**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Volver a la rama del nuevo hito (`hito-2`)**

   ```bash
   git checkout hito-2
   ```

3. **Fusionar los cambios de `main` en la nueva rama**

   ```bash
   git merge main
   ```

   📌 Si hay conflictos, Git pedirá que los resuelvan manualmente antes de continuar.
