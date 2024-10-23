import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kamokoq",
        "template_gs4rnjf",
        form.current,
        "KUsWFUTSrViBBXM6W"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      <label htmlFor="nom">Ecrivez votre nom :</label>
      <input type="text" className="contact__input" id="nom" required></input>
      <br />
      <label htmlFor="mail">Ecrivez votre email :</label>
      <input type="text" className="contact__input" id="mail" required></input>
      <br />
      <label htmlFor="objet">Ecrivez l'objet de votre message :</label>
      <input type="text" className="contact__input" id="objet" required></input>
      <br />
      <label htmlFor="msg">Ecrivez votre message :</label>
      <textarea className="contact__msg" id="msg" required></textarea>
      <br />
      <button type="submit" className="contact__button">
        Envoyer
      </button>
    </form>
  );
};

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Pour me contacter :</h2>
      <ContactUs />
    </section>
  );
}

export default Contact;
