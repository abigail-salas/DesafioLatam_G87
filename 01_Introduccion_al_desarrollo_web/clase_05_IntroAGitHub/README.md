# Introduccion a Git y GitHub

## Comandos Basicos:

- `cd` : Navega al directiorio principal
- `cd ruta` : Navega al directorio indicado
- `cd ..` : Vuelve un directorio atrás

- `ls` : Lista todas las carpetas o archivos en el directorio
- `ls -a` : Lista todas las carpetas o archivos en el directorio incluyendo los archivos ocultos

- `pwd` : Muestra la ruta completa del directorio

- `mkdir nombreCarpeta` : Crea una nueva carpeta

- `touch nombreArchivo` : Crea un nuevo archivo

  > Tiene que incluir siempre el tipo de archivo, por ejemplo .css, .html, .md

## Configurar Git por primera vez

1. Configurar tu nombre de usuario de GitHub

   ```bash
   git config --global user.name "nombreDeUsuarioDeGitHub"
   ```

2. Configurar tu correo electronico de GitHub

   ```bash
   git config --global user.email "emailDeGitHub@mail.com"
   ```

Para verificar que todo esté correcto:

- `git config --list`

  > Este comando devuelve una lista de configuracion de usuario

- `git config user.name`

  > Este comando verifica su nombre de usuario

## Inicializar un nuevo proyecto con comandos que da GitHub por default

```bash
echo "# DesafioLatam_G87" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/abigail-salas/DesafioLatam_G87.git
git push -u origin main
```

> ↑↑↑ Serie de comando que da github a la hora de crear un nuevo repositorio

1. `echo "# DesafioLatam_G87" >> README.md` (opcional)

   - Crea un archivo README.md con el contenido del titulo indicado

2. `git init` (se usa **una sola vez, _OBLIGATORIO_**)

   - Inicializa un nuevo repositorio de Git en el directorio actual

3. `git add README.md` o `git add .` (se va a utilizar en más de 1 ocasion)

   - Agrega el archivo "README.md" (puede ser cualquier archivo) en el area de preparacion o agrega **todos los archivos** con `git add .`

4. `git commit -m "first commit"` (se va a utilizar en más de 1 ocasion)

   - Registra todos los cambios que se agregaron en el comando anterior, con el comentario "first commit". Lo que ésta entre comillas va a variar dependiendo del cambio realizado

5. `git branch -M main` (se usa **una sola vez, _OBLIGATORIO_**)

   - Crea y cambia a la rama "main", que será la rama principal

6. `git remote add origin https://github.com/abigail-salas/DesafioLatam_G87.git` (se usa **una sola vez, _OBLIGATORIO_**)

   - Enlaza su repositorio local con el repositorio remoto de GitHub

7. `git push -u origin main` (se va a utilizar en más de 1 ocasion sin el "-u")

   - Sube todos los cambios realizados y registras al repositorio remoto