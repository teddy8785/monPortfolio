import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export const ContactUs = () => {
  // formulaire fonctionnel pour envoyer un mail sur mon adresse avec emailJS
  const form = useRef();

  const SERVICE_ID = "service_fg2ovcs";
  const TEMPLATE_ID = "template_gs4rnjf";
  const PUBLIC_KEY = "KUsWFUTSrViBBXM6W";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
    e.target.reset();
  };

  return (
    <form className="contact__form" ref={form} onSubmit={sendEmail}>
      <label htmlFor="nom">Ecrivez votre nom :</label>
      <input
        type="text"
        className="contact__input"
        id="nom"
        name="nom"
        required
      ></input>
      <br />
      <label htmlFor="mail">Ecrivez votre email :</label>
      <input
        type="email"
        className="contact__input"
        id="mail"
        name="email"
        required
      ></input>
      <br />
      <label htmlFor="objet">Ecrivez l'objet de votre message :</label>
      <input
        type="text"
        className="contact__input"
        id="objet"
        name="objet"
        required
      ></input>
      <br />
      <label htmlFor="msg">Ecrivez votre message :</label>
      <textarea
        className="contact__msg"
        id="msg"
        name="message"
        required
      ></textarea>
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
      <h2 className="contact__title">POUR ME CONTACTER :</h2>
      <ContactUs />
    </section>
  );
}

export default Contact;
