"use client";
import Image from "next/image";
import "./maraudes.css"; // Fichier CSS dédié
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Head from "next/head";

export default function Maraudes() {
  const [donLibre, setDonLibre] = useState("");
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const handlePayment = async (amount) => {
    try {
      // Exemple : montant que tu veux envoyer à Stripe

      // Faire l'appel à l'API pour créer la session de paiement
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }), // Passe l'email si nécessaire
      });

      const session = await response.json();
      if (session.url) {
        // Redirection vers Stripe Checkout
        window.location.href = session.url;
      } else {
        console.error("Erreur lors de la création de la session de paiement.");
      }
    } catch (error) {
      console.error("Erreur lors de l'appel à l'API Stripe:", error);
    }
  };
  const handleCustomPayment = () => {
    if (donLibre && !isNaN(donLibre) && donLibre > 0) {
      handlePayment(parseFloat(donLibre));
    } else {
      alert("Veuillez entrer un montant valide.");
    }
  };

  return (
    <>
      <Head>
        <title>Maraudes Solidaires | Karam Team</title>
        <meta
          name="description"
          content="Participez aux maraudes de Karam Team : des actions solidaires mensuelles pour offrir repas chauds, vêtements et écoute aux plus démunis."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="maraude, maraudes solidaires, dons, repas chauds, Karam Team, aide humanitaire, dons vêtements, solidarité, bénévolat"
        />
        <meta property="og:title" content="Maraudes – Karam Team" />
        <meta
          property="og:description"
          content="Karam Team organise des maraudes chaque mois pour venir en aide aux plus démunis. Faites un don ou rejoignez-nous dès aujourd'hui."
        />
        <meta property="og:image" content="/slider-about10.jpeg" />
        <meta
          property="og:url"
          content="https://karamteam.fr/collectes/maraudes"
        />
      </Head>
      <div className="maraudes-container">
        {/* ✅ Bannière avec image et titre */}
        <div className="maraudes-banner">
          <h1 className="maraudes-title">Maraudes</h1>
        </div>

        {/* ✅ Texte + Image */}
        <div className="maraudes-content">
          <div className="maraudes-text">
            <p>
              Karam Team s’engage à travers ses maraudes solidaires mensuelles à
              fournir de la chaleur et du réconfort. Les distributions
              permettent de fournir des repas chauds et des produits de première
              nécessité. Nous veillons également à fournir des vêtements adaptés
              aux différentes saisons.
            </p>
          </div>
          <div className="maraudes-image">
            <Image
              src="/slider-about10.jpeg"
              alt="Maraude Karam Team"
              width={500}
              height={350}
            />
          </div>
        </div>

        {/* ✅ Faire un Don */}
        <div className="don-section">
          <h2>Faire un don €</h2>
          <div className="don-buttons">
            <div className="don-amount-buttons">
              <button onClick={() => handlePayment(5)}>5€</button>
              <button onClick={() => handlePayment(10)}>10€</button>
              <button onClick={() => handlePayment(20)}>20€</button>
              <button onClick={() => handlePayment(50)}>50€</button>
              <button onClick={() => handlePayment(100)}>100€</button>
            </div>
            <div className="don-libre-section">
              <input
                type="number"
                value={donLibre}
                onChange={(e) => setDonLibre(e.target.value)}
                placeholder="Saisir un montant"
                className="don-libre-input"
              />
              <button
                onClick={handleCustomPayment}
                className="don-libre-button"
              >
                <img src="/verifier.png" />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Icônes et texte aligné */}
        <div className="donation-info">
          <div className="donation-title">
            <Image src="/t-shirt.png" alt="Vêtements" width={50} height={0} />
            <span>Faire un don</span>
            <Image
              src="/nourriture.png"
              alt="Produits alimentaires"
              width={60}
              height={40}
            />
          </div>
          <p className="donation-text">
            Au-delà de l’aide matérielle, les maraudes de Karam Team sont un
            moment de partage et d’écoute. C’est l’occasion d’échanger avec les
            bénéficiaires mais également entre bénévoles. Chaque action est
            guidée par des valeurs de solidarité, de bienveillance mais avant
            tout de respect.
            <br />
            <br />
            Tu souhaites faires des dons matériels : denrées alimentaires,
            vêtements, produits d’hygiène, produits de premiers soins… ?<br />
            N’hésite pas à nous contacter via notre rubrique{" "}
            <a href="/contact" className="contact-link">
              NOUS CONTACTER
            </a>
            , Karam Team réalise des collectes tout au long de l’année.
          </p>
        </div>
      </div>
    </>
  );
}
