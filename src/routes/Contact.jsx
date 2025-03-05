import { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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
      <button type="submit" className="link-btn">
        Verstuur bericht
      </button>
      {/* {status && <p className="mt-2 text-green-500">{status}</p>} */}
    </form>
  );
};
export default ContactPage;
