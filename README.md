# Mi portfolio · React + Tailwind

Migración del portafolio existente a React 19, Tailwind CSS 4 y Vite. Conserva las imágenes, la portada, las cuatro páginas de proyectos y sus URLs originales. No requiere backend ni reescrituras de rutas.

## Desarrollo

Requiere Node.js 22.12 o superior.

```bash
npm ci
npm run dev
```

## Compilar y verificar

```bash
npm run lint
npm run check:assets
npm run build
npx playwright install chromium
npm test
npm run preview
```

`dist/` contiene el sitio listo para alojar. Publica el resultado de la compilación, no los archivos fuente. Para GitHub Pages en `/Mi-portfolio/`:

```bash
npm run build -- --base=/Mi-portfolio/
```

## Estructura

- `src/pages/`: inicio y plantilla compartida de proyecto.
- `src/components/layout/`: navegación compartida.
- `src/components/portfolio/`: presentación, proyectos y contacto.
- `src/components/ui/`: portada, sección de imagen y carrusel reutilizable.
- `src/data/`: contenido de proyectos, navegación y contacto.
- `src/utils/paths.js`: rutas compatibles con subdirectorios de publicación.
- `src/styles/index.css`: Tailwind, colores y reglas globales mínimas.
- `public/img/`: recursos originales sin cambios.
- `pages/`: entradas HTML pequeñas para mantener los enlaces anteriores.
- `scripts/`: validación de recursos.
- `tests/`: navegación, galerías y tamaños de pantalla con Playwright.

Edita `src/data/projects.js` para modificar un proyecto. Cada sección define su `id`, etiqueta de navegación, tipo (`image` o `carousel`) y recursos. Edita `src/data/site.js` para actualizar contacto y menú.

## Comportamiento

Los carruseles avanzan cada 7 segundos, se pausan al pasar el cursor o enfocar sus controles y permiten avance manual, pausa y flechas del teclado cuando el carrusel tiene el foco. Respetan la preferencia de movimiento reducido y limpian sus temporizadores al desmontarse. Cada galería tiene estado independiente.

Se corrigieron anclas que no existían y el nombre mal escrito del fondo de introducción de No colapses. El tablero de No colapses se muestra desde su imagen existente, sin un `<img src="">`. Se eliminaron los estilos y scripts duplicados y una entrada de submódulo autorreferente sin configuración.
