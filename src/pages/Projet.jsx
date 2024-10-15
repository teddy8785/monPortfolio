import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Informations from "../components/Informations";
import data from "../projets.json";
import { useParams } from "react-router-dom";
import "../styles/informations.css";

function Projet() {
  const { id } = useParams();
  const post = data.find((projet) => projet.id === id);

  if (!post) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <Header>
        <h1 className="header__title">{post.nom}</h1>
        <div className="informations__link--content">
          {post.lien ? (
            <>
              <a className="informations__link" href={post.lien}>
                Cliquer pour voir le site
              </a>
            </>
          ) : null}
          {post.github ? (
            <>
              <a className="informations__link" href={post.github}>
                Cliquer pour voir le projet sur Github
              </a>
            </>
          ) : null}
        </div>
      </Header>
      <Slideshow />
      <Informations />
    </div>
  );
}

export default Projet;
