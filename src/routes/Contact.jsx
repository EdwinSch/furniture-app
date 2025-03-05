import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_KEY;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_KEY;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        setStatus("Bericht verstuurd!");
        setFormData({ name: "", email: "", message: "" });
        // console.log("Message sent successfully!", response);
      })
      .catch((error) => {
        setStatus("Kon bericht niet versturen :(");
        // console.log("Failed to send message.", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Link to={"/"} className="back-btn">
        <IoArrowBack />
        <span>Terug</span>
      </Link>
      <h2>Stuur een bericht</h2>
      <p className="info">
        Heb je interesse in iets of een vraag? Vul onderstaand formulier in en
        je ontvangt zsm. een antwoord per mail.
      </p>

      {/* Inputs */}
      <label htmlFor="name">Naam:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Je naam"
        value={formData.name}
        onChange={handleChange}
        className="input"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Je email"
        value={formData.email}
        onChange={handleChange}
        className="input"
        required
      />

      <label htmlFor="message">Bericht:</label>
      <textarea
        name="message"
        id="message"
        placeholder="Je bericht"
        value={formData.message}
        onChange={handleChange}
        className="input textarea-input"
        required
      />

      <div className="submit-wrapper">
        <button type="submit" className="link-btn">
          Verstuur bericht
        </button>
        {status && <p className="status">{status}</p>}
      </div>

      <h3>Ophalen in Breda</h3>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9915.691630125926!2d4.7669176862287745!3d51.58797628126061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c69f830e4d6aad%3A0x250188f699ec66c2!2sBreda%20Centrum%2C%20Breda!5e0!3m2!1snl!2snl!4v1741202515834!5m2!1snl!2snl"
      ></iframe>
    </form>
  );
};
export default ContactPage;
