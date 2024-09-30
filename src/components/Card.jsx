import { NavLink } from "react-router-dom";
import "../styles/card.css";

function Card({ id, nom, description, image, imageDown }) {
  return (
    <NavLink className="card__link" to={`/Projet/${id}`}>
      <article className="card">
        <h3 className="card__title">{nom}</h3>
        <p className="card__description">{description}</p>
        <picture>
          <source srcSet={imageDown} media="(max-width: 768px)" />
          <img className="card__img" src={image} alt={nom} />
        </picture>
      </article>
    </NavLink>
  );
}

export default Card;
