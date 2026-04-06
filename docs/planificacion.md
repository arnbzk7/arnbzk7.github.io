# Planificacion del Sitio Web - Geovanny Peñaloza

## Vision General

Portafolio personal futurista/cyberpunk para Geovanny Peñaloza, Desarrollador Full Stack. El sitio transmite una imagen inovadora y tecnica, manteniendo un diseno limpio y profesional.

---

## Estructura de Paginas

El sitio usara una estructura **SPA (Single Page Application)** con navegacion suave entre secciones, usando Astro como framework.

### Paginacion

| Pagina | Ruta | Descripcion |
|--------|------|-------------|
| Home | `/` | Hero + todas las secciones principales (scroll) |
| Portfolio | `/portfolio` | Galeria detallada de proyectos |
| Sobre Mi | `/sobre-mi` | Pagina extendida "About" |

### Secciones del Home (Scroll)

1. **Hero Section**
   - Nombre completo con efecto glitch
   - Titulo profesional animado
   - CTA buttons (Portafolio, Sobre Mi)
   - Fondo de particulas interactivas

2. **About Section**
   - Resumen profesional (2-3 oraciones)
   - Badge de ubicacion
   - Estadisticas animadas (años experiencia, proyectos completados, tecnologias)

3. **Skills Section**
   - Grid de tecnologias con iconos
   - Agrupadas por categoria: Frontend, Backend, Mobile, Tools/DevOps, AI
   - Barras de progreso o niveles visuales

4. **Experience Section**
   - Timeline vertical con puntos conectados
   - 4 experiencias laborales con:
     - Cargo/Titulo
     - Empresa y periodo
     - Descripcion de responsabilidades

5. **Projects Section**
   - Grid de cards con los 4 proyectos principales
   - Cada card: imagen, titulo, tecnologias, descripcion, links
   - Hover effects con animaciones

6. **Education Section**
   - Credenciales academicas
   - Idiomas

7. **Contact Section**
   - Links directos (LinkedIn, GitHub, Email)
   - Informacion de ubicacion
   - (Opcional) Formulario de contacto

### Navegacion

- **Header fijo** (sticky, transparente → solido al scroll)
  - Logo/Nombre a la izquierda
  - Links de navegacion al centro
  - Iconos sociales (LinkedIn, GitHub) a la derecha

- **Footer**
  - Copyright
  - Links sociales
  - "Made with..." badge

---

## Paginas Individuales

### `/sobre-mi`
- Version extendida del About
- Mas detalles sobre historia profesional
- Intereses/enfoque tecnologico
- Mas fotos o imagenes decorativas

### `/portfolio`
- Galeria mas completa de proyectos
- Filtros por tecnologia
- Modal o pagina de detalle por proyecto
- Mas capturas/screenshots

---

## Diseno Visual

### Paleta de Colores (mantener existente)
- Primary: `#00f3ff` (cyan neón)
- Secondary: `#ff00ff` (magenta)
- Accent: `#7000ff` (violeta)
- Background: `#0a0a0f` (negro profundo)
- Text: `#ffffff` (blanco)

### Tipografia
- Headings:字体 mono o futuristic
- Body: Sans-serif limpia

### Animaciones
- Scroll reveal con GSAP
- Hover effects en cards y botones
- Parallax sutil en secciones
- Particulas en hero

---

## Estilo Visual Elegido

### Concepto: Brutalist + Generative + Glitch Funcional

Este estilo combina tres enfoque unicos donde las animaciones tienen **proposito funcional real**, no solo decorativo.

#### Principios Base

| Principio | Descripcion |
|-----------|-------------|
| **Utilidad sobre decoracion** | Cada animacion revela, oculta, o confirma una accion |
| **Glitches controlados** | Transiciones que parecen "bugs" intencionales para crear identidad |
| **Layout asimetrico** | Estructura no convencional que requiere exploracion |
| **Tipografia bold** | Textos grandes y pronunciados como elementos de diseno |
| **Generativo sutil** | Patrones que se generan en base a interacciones del usuario |

#### Ejemplos de Animaciones Funcionales

| Animacion | Funcion |
|-----------|---------|
| Hover en skills | Revela nivel de proficiency real |
| Hover en cards | Desglitch para revelar detalles del proyecto |
| Click en botones | Confirmacion visual (glitch de exito) |
| Scroll entre secciones | Transicion "corrupcion" controlada |
| Particulas interactivas | Representan conexion de sistemas (referencia a GPS) |

#### Por que este estilo

1. Refleja capacidad de crear soluciones funcionales y esteticas
2. Demuestra creatividad sin ser "solo decorativo"
3. Diferencia de portfolios genericos con plantillas
4. Muestra personalidad tecnica unica
5. Las animaciones comunican algo - no solo adornan

### Opciones de Estilo Consideradas

| Estilo | Descripcion |
|--------|-------------|
| **Brutalist Web** | Diseno crudo, tipografia oversized, layouts asimetricos. Hover revela info oculta. |
| **Glassmorphism+Cyberpunk** | Fondos translucidos con blur. Particulas representan datos en movimiento. |
| **Terminal/CLI Inspired** | Cursor parpadeante, texto que se "imprime", comandos funcionales. |
| **Generative Art** | Animaciones que crean patrones unicos basados en datos reales. |
| **Isometric 3D** | Elementos 3D sutiles con hover que hace "flotar" elementos. |
| **Glitch Art** | Corrupcion visual controlada, hover al glitch para revelar info oculta. |

### Elementos Clave del Estilo Final

- **Header:** Fijo, transparente → solido con glitch transition
- **Hero:** Efecto glitch en nombre + particulas generativas interactivas
- **Skills:** Hover revela "nivel real" con barra animada
- **Cards:** Hover desglitch para mostrar info adicional
- **Timeline:** Linea con puntos que se iluminan secuencialmente
- **Footer:** Glitch sutil en links hover

---

## Checklist de Implementacion

- [ ] Header/Navigation component
- [ ] Hero section
- [ ] About section
- [ ] Skills section (grid de iconos)
- [ ] Experience section (timeline)
- [ ] Projects section (cards)
- [ ] Education section
- [ ] Contact section
- [ ] Footer component
- [ ] Page `/sobre-mi`
- [ ] Page `/portfolio`
- [ ] Animaciones de scroll (Intersection Observer / GSAP)
- [ ] Responsive design (mobile-first)
- [ ] SEO meta tags
- [ ] Open Graph tags

---

## Notas Tecnicas

- **Framework:** Astro
- **Estilos:** Tailwind CSS
- **Animaciones:** GSAP
- **Iconos:** Font Awesome o Devicons
- **Deployment sugerido:** Vercel, Netlify, o GitHub Pages
