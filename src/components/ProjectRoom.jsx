import { useState } from "react";
import { asset } from "../lib";
import Lightbox from "./Lightbox.jsx";

export default function ProjectRoom({ project, flip }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const { images } = project;
  const current = images[active];
  const host = project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const titleId = `${project.id}-title`;

  return (
    <article
      className={`room${flip ? " room--flip" : ""}`}
      data-theme={project.theme}
      aria-labelledby={titleId}
    >
      <div className="wrap room__grid">
        <div className="room__copy">
          <p className="room__kind">{project.kind}</p>
          <h3 id={titleId}>{project.title}</h3>
          <p className="room__summary">{project.summary}</p>

          <ul className="room__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <dl className="room__facts">
            <div>
              <dt>Para</dt>
              <dd>{project.client}</dd>
            </div>
            {project.stack.length > 0 && (
              <div>
                <dt>Hecho con</dt>
                <dd>{project.stack.join(", ")}</dd>
              </div>
            )}
          </dl>

          <div className="room__actions">
            <a className="btn btn--primary" href={project.demo} target="_blank" rel="noopener noreferrer">
              Ver sitio en vivo
            </a>
            {project.repo && (
              <a className="btn btn--ghost" href={project.repo} target="_blank" rel="noopener noreferrer">
                Ver código
              </a>
            )}
          </div>
        </div>

        <div className="room__visual">
          <div className="frame">
            <div className="frame__bar">
              <span className="frame__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="frame__url">{host}</span>
            </div>
            <button
              type="button"
              className="frame__shot"
              onClick={() => setOpen(true)}
              aria-label={`Ampliar captura: ${current.alt}`}
            >
              <img key={current.file} src={asset(`${current.file}.webp`)} alt={current.alt} />
              <span className="frame__zoom" aria-hidden="true">Ampliar</span>
            </button>
          </div>

          <ul className="thumbs" aria-label={`Capturas de ${project.title}`}>
            {images.map((img, i) => (
              <li key={img.file}>
                <button
                  type="button"
                  className="thumb"
                  aria-pressed={i === active}
                  aria-label={`Ver captura ${i + 1} de ${images.length}`}
                  onClick={() => setActive(i)}
                >
                  <img src={asset(`${img.file}-s.webp`)} alt="" loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {open && (
        <Lightbox
          title={project.title}
          images={images}
          index={active}
          onIndex={setActive}
          onClose={() => setOpen(false)}
        />
      )}
    </article>
  );
}
