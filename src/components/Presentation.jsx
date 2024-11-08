import "../styles/presentation.css";
import avatar from "../assets/avatar.webp";

function Presentation() {
  return (
    <section className="presentation" id="moi">
      <h2 className="presentation__title ">A PROPOS DE MOI</h2>
      <div className="presentation__content">
        <img
          src={avatar}
          alt="mon avatar"
          className="presentation__avatar"
        ></img>
        <p className="presentation__text">
          Intégrateur web de formation chez Openclassrooms, venez découvrir les
          projets que j'ai réalisé lors de ma formation et contacter moi si vous
          avez des projets à me proposer.
          <br />
          <br />
          N'hesitez pas !
        </p>
      </div>
    </section>
  );
}

export default Presentation;
