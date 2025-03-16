"use client";

import { useState } from "react";
import './contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message envoyé !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi.");
      }
    } catch (error) {
      setStatus("Erreur de connexion.");
    }
  };

  return (
    <>
    <div className="text-container2">
      <div className="project-text-background2">
        <div className="project-text-under-title2">
          <p>
          Une <span className="highlight-text">question</span> ?<br/>
  Besoin d'un <span className="highlight-text">renseignements</span> ?<br/>
  Réponds à notre questionnaire !
          </p>
        </div> 
        </div> 
      </div>
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Envoyer</button>
      </form>
      <p>{status}</p>
    </div>
    </>
  );
}
