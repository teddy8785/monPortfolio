import Header from "../components/Header";
import MsgErreur from "../components/MsgErreur";
import Footer from "../components/Footer";

function Erreur() {
  return (
    <div>
      <Header>
        <h1 className="header__title">Cette page n'existe pas</h1>
      </Header>
      <MsgErreur />
      <Footer />
    </div>
  );
}

export default Erreur;