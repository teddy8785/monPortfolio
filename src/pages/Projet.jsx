import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Informations from "../components/Informations";
import data from "../projets.json";
import { useParams } from "react-router-dom";
import "../styles/informations.css";
import { useEffect } from "react";

function Projet() {
  // récupération du projet par son id
  const { id } = useParams();
  const post = data.find((projet) => projet.id === id);

  // au clic, la page suivante se retrouve en haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <Header>
        <h1 className="header__title">{post.nom}</h1>
        <div className="informations__link--content">
          <button
            className="informations__return"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            Retour
          </button>
          {post.lien ? (
            <>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="informations__link"
                href={post.lien}
              >
                Cliquer pour voir le site
              </a>
            </>
          ) : null}
          {post.github ? (
            <>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="informations__link"
                href={post.github}
              >
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
