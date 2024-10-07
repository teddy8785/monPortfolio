import { useParams } from "react-router-dom";
import "../styles/informations.css";
import data from "../projets.json";

function Informations() {
  const { id } = useParams();
  const post = data.find((projet) => projet.id === id);

  return (
    <div className="informations">
      <div className="informations__content">
        <h2 className="informations__title">Mission</h2>
        <p>{post.mission}</p>
        {post.objectifs.length === 1 ? <h2 className="informations__title">Objectif</h2> : <h2 className="informations__title">Objectifs</h2>}
        <ul>
          {post.objectifs.map((objectif, index) => (
            <li key={index}>{objectif}</li>
          ))}
        </ul>
        {post.competences.length === 1 ? <h2 className="informations__title">Compétence acquise</h2> : <h2 className="informations__title">Compétences acquises</h2>}
        <ul>
          {post.competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
        <div className="informations__link--content">
          {post.github ? (
            <>
              <h2>Lien vers Github</h2>
              <a className="informations__link" href={post.github}>
                Github
              </a>
            </>
          ) : null}
        </div>
        <div className="informations__link--content">
          {post.lien ? (
            <>
              <h2>Lien vers le site</h2>
              <a className="informations__link" href={post.lien}>
                Site
              </a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Informations;
