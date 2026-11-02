import { asset } from "../lib";

const services = [
  {
    title: "Desarrollo web y sistemas",
    text: "Sitios web, sistemas de gestión y aplicaciones hechas a la medida de tu negocio.",
    image: "servicio-web.webp",
    alt: "Mapa interactivo de El Salvador, parte de un proyecto web",
  },
  {
    title: "Cámaras de seguridad y redes",
    text: "Instalación de cámaras de videovigilancia, grabadores y cableado de red para casas, negocios e instituciones.",
    image: "servicio-camara.webp",
    alt: "Técnico instalando una cámara de videovigilancia en el techo",
  },
  {
    title: "Reparación de equipos",
    text: "Mantenimiento y reparación de laptops, computadoras, consolas e impresoras.",
    image: "servicio-laptop.webp",
    alt: "Técnico reparando el interior de una laptop",
  },
];

export default function Services() {
  return (
    <section className="services" id="servicios" aria-labelledby="servicios-title">
      <div className="wrap">
        <h2 id="servicios-title">Servicios</h2>
        <p className="services__lead">
          Además del software, PC Solutions instala y repara lo que tu negocio usa todos los días.
        </p>
        <ul className="services__list">
          {services.map((s) => (
            <li className="service" key={s.title}>
              <div className="service__text">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <img className="service__img" src={asset(s.image)} alt={s.alt} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
