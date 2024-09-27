import { NavLink } from 'react-router-dom';
import '../styles/card.css';

function Card({ id, nom, description, image }) {
  return (
      <article className="card">
      <NavLink className="Card__link" to={`/Projet/${id}`}>
        <h3 className='card__title'>{nom}</h3>
        <p className='card__description'>{description}</p>
        <img className='card__img' src={image} alt={nom}></img>
      </NavLink>
      </article>
  );
}

export default Card;