import "./nav.scss";

export default function Nav() {
  return (
    <section className="nav-section">
      <nav className="nav-section__nav">
        <a href="#development-department" className="nav-section__link link">
          Abteilungen
        </a>

        <a href="#contact" className="nav-section__link link">
          Kontakte
        </a>
      </nav>
    </section>
  );

  /*  <a href="#technologies" className="nav-section__link link">
          Technologien
        </a>
  
  */
}
