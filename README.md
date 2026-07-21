# Gianni & Maricielo — 3 meses 💌

Página web dinámica para celebrar los 3 meses de aniversario.

## Contenido
- `index.html` — estructura de la página
- `style.css` — estilos (tema romántico en vino, oro y marfil)
- `script.js` — interacción del sobre, la carta y la música
- `assets/` — aquí va tu archivo de música

## Antes de subirla: agrega tu música

1. Copia tu archivo MP3 dentro de la carpeta `assets`.
2. Renómbralo exactamente a: **`musica.mp3`**
   (la ruta final debe quedar así: `assets/musica.mp3`)
3. Si quieres usar otro nombre, cambia esta línea en `index.html`:
   ```html
   <source src="assets/musica.mp3" type="audio/mpeg">
   ```

## Cómo verla en tu computadora
Simplemente abre el archivo `index.html` con doble clic (se abrirá en tu navegador).

## Cómo subirla a GitHub

1. Crea un repositorio nuevo en GitHub (por ejemplo `3meses-gianni-maricielo`).
2. En tu computadora, dentro de esta carpeta, abre una terminal y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Página de nuestros 3 meses"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/3meses-gianni-maricielo.git
   git push -u origin main
   ```
3. (Opcional) Para verla en vivo con un link, activa **GitHub Pages**:
   - Ve a tu repositorio → **Settings** → **Pages**
   - En "Branch" selecciona `main` y la carpeta `/ (root)`
   - Guarda, y en un par de minutos tu página estará disponible en:
     `https://TU-USUARIO.github.io/3meses-gianni-maricielo/`

## Notas
- El sobre es interactivo: al hacer clic o presionar Enter se abre y aparece la carta.
- El botón circular de la esquina inferior derecha activa/pausa la música.
- Si el archivo `assets/musica.mp3` no existe todavía, el botón de música mostrará un aviso recordándote agregarlo.
