# PC Solutions · Portafolio

Portafolio de una página hecho con **React + Vite**. Cada proyecto tiene su propio
"cuarto" de color, un marco de navegador con sus capturas y un visor para ampliarlas.

## Probarlo en tu computadora

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente `http://localhost:5173/pcsolutions-code/`).

## Lo que debes completar

| Archivo | Qué hacer |
|---|---|
| `src/data/site.js` | Poner tu número de **WhatsApp** (con código de país, sin signos: `50312345678`) y, si quieres, tu **correo**. Mientras `whatsapp` esté vacío, el botón lleva a la página de contacto de tu sitio. |
| `src/data/projects.js` | Confirmar las tecnologías (`stack`) de PC Solutions y agregar las del Booklet. Si un proyecto tiene repositorio público, pega el enlace en `repo` y aparecerá el botón "Ver código". |

## Agregar o cambiar un proyecto

1. Convierte las capturas: `python tools/optimizar_capturas.py ruta/de/capturas nombre-proyecto`
   (necesita `pip install pillow`). Genera los archivos en `public/assets/`.
2. Copia un bloque de `src/data/projects.js`, cambia los datos y las imágenes.
3. Para un color nuevo, agrega un `data-theme` en `src/styles.css` copiando uno existente.

## Publicar en GitHub Pages

1. Sube el proyecto al repo `pcsolutions-code` (rama `main`).
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `git push` a `main` publica solo. Quedará en
   `https://gamalsanchz.github.io/pcsolutions-code/`.

Si el repo se llama distinto, cambia `base` en `vite.config.js` y la URL en `index.html`
(etiquetas `og:url` y `og:image`).

## Antes de mostrarlo a clientes

- Pide el visto bueno de AIESEC en ESEN para mostrar su Booklet.
- Presenta Roble & Piedra como **concepto de diseño** (es una maqueta).
- En el sitio de PC Solutions, arregla el logo roto que aparece en "Marcas destacadas".
- La captura del perfil de Comprasal no se usó porque muestra el NIT y datos de contacto.
