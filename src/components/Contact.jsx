import { site, whatsappHref } from "../data/site.js";

export default function Contact() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contacto-title">
      <div className="wrap contact__grid">
        <div>
          <h2 id="contacto-title">Cuéntanos qué necesitas</h2>
          <p className="contact__lead">
            Escríbenos con tu idea o tu problema y te respondemos con una propuesta.
            Atendemos clientes en {site.location}.
          </p>
        </div>
        <div className="contact__actions">
          <a className="btn btn--primary btn--lg" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Escribir por WhatsApp
          </a>
          {site.email && (
            <a className="btn btn--ghost btn--lg" href={`mailto:${site.email}`}>
              Enviar un correo
            </a>
          )}
          <a className="btn btn--ghost btn--lg" href={site.website} target="_blank" rel="noopener noreferrer">
            Visitar el sitio de PC Solutions
          </a>
        </div>
      </div>
      <footer className="wrap footer">
        <div className="footer__inner">
          <p>© {new Date().getFullYear()} {site.name} / {site.company}</p>
        </div>
      </footer>
    </section>
  );
}
