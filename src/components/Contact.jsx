import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Pour me contacter :</h2>
      <form className="contact__form">
        <label htmlFor="nom">Ecrivez votre nom :</label>
        <input type="text" className="contact__input" id="nom" required></input>
        <br />
        <label htmlFor="mail">Ecrivez votre email :</label>
        <input
          type="text"
          className="contact__input"
          id="mail"
          required
        ></input>
        <br />
        <label htmlFor="objet">Ecrivez l'objet de votre message :</label>
        <input
          type="text"
          className="contact__input"
          id="objet"
          required
        ></input>
        <br />
        <label htmlFor="msg">Ecrivez votre message :</label>
        <textarea className="contact__msg" id="msg" required></textarea>
        <br />
        <button type="submit" className="contact__button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
