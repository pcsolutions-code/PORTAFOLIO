import { projects } from "../data/projects.js";
import ProjectRoom from "./ProjectRoom.jsx";

export default function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title">
      <div className="intro">
        <div className="wrap">
          <h2 id="proyectos-title">Proyectos recientes</h2>
          <p>
            Un sitio corporativo, una guía digital interactiva y un concepto de
            diseño inmobiliario. Toca una captura para verla en grande.
          </p>
        </div>
      </div>
      {projects.map((project, i) => (
        <ProjectRoom key={project.id} project={project} flip={i % 2 === 1} />
      ))}
    </section>
  );
}
