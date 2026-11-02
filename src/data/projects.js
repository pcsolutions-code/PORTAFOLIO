// Para agregar un proyecto: copia un bloque, cambia los datos y sube sus capturas
// a public/assets/ (una versión "nombre.webp" y otra pequeña "nombre-s.webp").
// theme: "pc" | "booklet" | "roble"  (colores definidos en src/styles.css)
export const projects = [
  {
    id: "pcsolutions",
    theme: "pc",
    kind: "Sitio web corporativo",
    title: "PC Solutions",
    client: "PC Solutions",
    summary:
      "El sitio de la empresa: qué servicios ofrece, qué productos vende y cómo contactarla en un par de toques.",
    highlights: [
      "Servicios de soporte técnico, consolas, impresoras y videovigilancia",
      "Venta de accesorios, papelería y equipos de marcas reconocidas",
      "Contacto directo por WhatsApp, correo, redes y llamada",
    ],
    stack: ["HTML", "CSS", "JavaScript"], // confirma que sea correcto
    demo: "https://gamalsanchz.github.io/pcsolutions/",
    repo: "",
    images: [
      { file: "pcsolutions-01", alt: "Inicio del sitio de PC Solutions con el logo y los botones de servicios y contacto" },
      { file: "pcsolutions-02", alt: "Servicios de soporte técnico: PC y laptops, consolas, impresoras y videovigilancia" },
      { file: "pcsolutions-04", alt: "Venta de productos: accesorios, papelería, dispositivos y armado de PCs" },
      { file: "pcsolutions-05", alt: "Sección Nosotros con los valores de calidad, compromiso y enfoque institucional" },
      { file: "pcsolutions-07", alt: "Sección de contacto con botones de WhatsApp, correo, redes, ubicación y llamada" },
    ],
  },
  {
    id: "booklet-esen",
    theme: "booklet",
    kind: "Guía digital interactiva",
    title: "Booklet de AIESEC en ESEN",
    client: "AIESEC en ESEN",
    summary:
      "Una guía para los voluntarios que llegan a El Salvador: dónde ir, qué comer, cuánto cuesta todo y quién los recibe.",
    highlights: [
      "Mapa interactivo con paradas por zona del país",
      "Calculadora de presupuesto semanal en 12 monedas",
      "Disponible en español e inglés",
    ],
    stack: [], // agrega aquí las tecnologías, por ejemplo ["React", "Vite"]
    demo: "https://bookletsvesen.vercel.app/",
    repo: "",
    images: [
      { file: "booklet-10", alt: "Portada del booklet «Descubre El Salvador»" },
      { file: "booklet-12", alt: "Mapa interactivo de El Salvador con pines por zona" },
      { file: "booklet-14", alt: "Sabores y tradiciones: platos típicos como pupusas, yuca frita y panes con pollo" },
      { file: "booklet-22", alt: "Calculadora de presupuesto con el total convertido a otra moneda" },
      { file: "booklet-30", alt: "Tarjeta de Surf City con su descripción y paradas" },
    ],
  },
  {
    id: "roble-piedra",
    theme: "roble",
    kind: "Concepto de diseño en Figma",
    title: "Roble & Piedra",
    client: "Proyecto de concepto",
    summary:
      "Maqueta de un sitio para una inmobiliaria: un catálogo claro para comprar, vender o alquilar, con un tono sobrio y cercano.",
    highlights: [
      "Catálogo de propiedades con filtros por tipo y orden",
      "Fichas con precio, ubicación y características",
      "Página de servicios y formulario de consulta",
    ],
    stack: ["Figma"],
    demo: "https://pluck-chess-38431952.figma.site/",
    repo: "",
    images: [
      { file: "roble-32", alt: "Portada con el lema «El hogar que perdura, elegido con criterio»" },
      { file: "roble-33", alt: "Propiedades destacadas con precio y ubicación" },
      { file: "roble-34", alt: "Catálogo de propiedades con filtros de tipo y orden" },
      { file: "roble-36", alt: "Sección Nosotros con la historia y los valores de la inmobiliaria" },
    ],
  },
];
