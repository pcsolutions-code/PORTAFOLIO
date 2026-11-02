// Datos de contacto. Rellena lo que falte; lo vacío se oculta o usa un respaldo.
export const site = {
  name: "PC Solutions",
  company: "GAMMAR SOLUTIONS S.A.S. DE C.V.",
  location: "San Francisco Gotera, Morazán, El Salvador",

  // WhatsApp con código de país y sin signos: "50312345678".
  // Mientras esté vacío, el botón lleva a la página de contacto de tu sitio.
  whatsapp: "75090182",
  whatsappMessage: "Hola, vi su portafolio y quiero más información.",

  // Correo (opcional). Si lo dejas vacío, el botón no aparece.
  email: "",

  website: "https://gamalsanchz.github.io/pcsolutions/",
  contactPage: "https://gamalsanchz.github.io/pcsolutions/Contactanos.html",
};

export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : site.contactPage;
