import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Informations from "../components/Informations";
import data from '../projets.json';
import { useParams } from "react-router-dom";

function Projet() {

  const {id} = useParams();
  const post = data.find(projet => projet.id === id);

  if (!post) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <Header>
      <h1 className="header__title">{post.nom}</h1>
        </Header>
        <Slideshow />
        <Informations />
    </div>
  );
}

export default Projet;