import { HashLink } from "react-router-hash-link";

import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Accueil() {
  return (
    <div>
      <Header>
        <h1 className="header__title">Mon portfolio</h1>
        <nav className="header__link">
          <HashLink smooth to="#moi" className="header__link--color">
            A propos
          </HashLink>
          <HashLink smooth to="#projet" className="header__link--color">
            Mes projets
          </HashLink>
          <HashLink smooth to="#contact" className="header__link--color">
            contact
          </HashLink>
        </nav>
      </Header>
      <Presentation />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default Accueil;
