import { asset } from "../lib";

// Tres columnas de capturas que se desplazan en direcciones distintas.
const columns = [
  ["pcsolutions-01", "booklet-10", "roble-32", "pcsolutions-02"],
  ["roble-33", "booklet-12", "pcsolutions-04", "booklet-14"],
  ["booklet-22", "roble-34", "pcsolutions-07", "booklet-30"],
];

function Column({ files }) {
  // Se repite el grupo 4 veces para que el bucle no deje huecos.
  const loop = Array.from({ length: 4 }, () => files).flat();
  return (
    <div className="mosaic__col">
      {loop.map((file, i) => (
        <img key={i} src={asset(`${file}-s.webp`)} alt="" decoding="async" />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <h1>Sitios web, sistemas y soporte técnico para tu negocio</h1>
          <p>
            PC Solutions desarrolla software, instala cámaras y redes, y repara
            equipos desde San Francisco Gotera, Morazán.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#proyectos">Ver proyectos</a>
            <a className="btn btn--ghost" href="#contacto">Contactar</a>
          </div>
        </div>
      </div>
      <div className="mosaic" aria-hidden="true">
        <div className="mosaic__stage">
          {columns.map((files, i) => (
            <Column key={i} files={files} />
          ))}
        </div>
      </div>
    </section>
  );
}
