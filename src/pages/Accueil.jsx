import { HashLink } from "react-router-hash-link";

import Header from "../components/Header";
import Presentation from "../components/Presentation";
import Main from "../components/Main";
import Contact from "../components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Footer from "../components/Footer";

function Accueil() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, [location.hash]);

  return (
    <div>
      <Header>
        <h1 className="header__title">PORTFOLIO BARIERAUD</h1>
        <nav className="header__link">
          <HashLink
            smooth
            to="#moi"
            className="header__link--format header__link--scroll"
          >
            A propos
          </HashLink>
          <HashLink smooth to="#projet" className="header__link--format">
            Mes projets
          </HashLink>
          <HashLink smooth to="#contact" className="header__link--format">
            contact
          </HashLink>
        </nav>
      </Header>
      <Presentation />
      <Main />
      <Contact />
      {/* <Footer>
        <h2 id="contact" className="footer__title">
          Contact
        </h2>
        <p className="footer__contact">Email : teddyBarieraud@gmail.com</p>
      </Footer> */}
    </div>
  );
}

export default Accueil;
