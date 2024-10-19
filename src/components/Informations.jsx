import { useParams } from "react-router-dom";
import "../styles/informations.css";
import data from "../projets.json";

function Informations() {
  const { id } = useParams();
  const post = data.find((projet) => projet.id === id);

  if (!post) {
    return <div>Projet non trouvé</div>;
  }
  
  return (
    <section className="informations">
      <div className="informations__resume--column">
            <h2 className="informations__title">Mission</h2>
            <p className= "informations__elements">{post.mission}</p>
          </div>
      <div className="informations__content">
        <div className="informations__resume">
          <div className="informations__resume--column">
            {post.objectifs.length === 1 ? (
              <h2 className="informations__title">Objectif</h2>
            ) : (
              <h2 className="informations__title">Objectifs</h2>
            )}
            <ul>
              {post.objectifs.map((objectif, index) => (
                <li className= "informations__elements" key={index}>{objectif}</li>
              ))}
            </ul>
          </div>
          <div className="informations__line"></div>
          <div className="informations__resume--column">
            {post.competences.length === 1 ? (
              <h2 className="informations__title">Compétence acquise</h2>
            ) : (
              <h2 className="informations__title">Compétences acquises</h2>
            )}
            <ul>
              {post.competences.map((competence, index) => (
                <li className= "informations__elements" key={index}>{competence}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informations;
