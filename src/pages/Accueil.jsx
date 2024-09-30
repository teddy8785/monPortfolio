import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Accueil() {
  return (
    <div>
      <Header>
      <h1 className="header__title">Mon portfolio</h1>
      </Header>
      <Main />
      <Footer />
    </div>
  );
}

export default Accueil;