import { asset } from "../lib";

export default function Header() {
  return (
    <header className="topbar">
      <div className="wrap topbar__inner">
        <a href="#top" className="topbar__brand" aria-label="PC Solutions, ir al inicio">
          <img src={asset("logo-horizontal.webp")} alt="PC Solutions" width="130" height="33" />
        </a>
        <nav className="topbar__nav" aria-label="Principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn--primary topbar__cta" href="#contacto">Contactar</a>
      </div>
    </header>
  );
}
