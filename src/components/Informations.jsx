import { useParams } from "react-router-dom";
import "../styles/informations.css";
import data from "../projets.json";

function Informations() {
  const { id } = useParams();
  const post = data.find((projet) => projet.id === id);

  return (
    <div className="informations">
      <div>
        <h2>Mission</h2>
        <p>{post.mission}</p>
        {post.objectifs.length === 1 ? <h2>Objectif</h2> : <h2>Objectifs</h2>}
        <ul>
          {post.objectifs.map((objectif, index) => (
            <li key={index}>{objectif}</li>
          ))}
        </ul>
        <div>
          {post.github ? (
            <>
              <h2>Lien vers Github</h2>
              <a className="link" href={post.github}>
                Github
              </a>
            </>
          ) : null}
        </div>
        <div>
          {post.lien ? (
            <>
              <h2>Lien vers le site</h2>
              <a className="link" href={post.lien}>
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
