import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#proyectos">Saltar al contenido</a>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
    </>
  );
}
