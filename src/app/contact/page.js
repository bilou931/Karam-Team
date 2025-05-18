"use client";

import { useState } from "react";
import "./contact.css";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
      <Head>
        <title>Contact – Karam Team</title>
        <meta
          name="description"
          content="Une question ? Besoin d’un renseignement ? Contactez directement Karam Team via notre formulaire en ligne."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, contact, aide humanitaire, questions, association solidaire"
        />
        <meta property="og:title" content="Contact – Karam Team" />
        <meta
          property="og:description"
          content="Vous avez une question ou souhaitez nous contacter ? Envoyez-nous un message via notre formulaire."
        />
        <meta property="og:url" content="https://karamteam.fr/contact" />
      </Head>
      <div className="text-container2">
        <div className="project-text-background2">
          <div className="project-text-under-title2">
            <p>
              Une <span className="highlight-text">question</span> ?<br />
              Besoin d'un <span className="highlight-text">
                renseignements
              </span>{" "}
              ?<br />
              Réponds à notre questionnaire !
            </p>
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
        <p>{status}</p>
      </div>
    </>
  );
}
