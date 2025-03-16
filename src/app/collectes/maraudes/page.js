"use client";
import Image from "next/image";
import "./maraudes.css"; // Fichier CSS dédié

export default function Maraudes() {
  return (
    <div className="maraudes-container">
      {/* ✅ Bannière avec image et titre */}
      <div className="maraudes-banner">
        <h1 className="maraudes-title">Maraudes</h1>
      </div>

      {/* ✅ Texte + Image */}
      <div className="maraudes-content">
        <div className="maraudes-text">
          <p>
          Karam Team s’engage à travers ses maraudes solidaires
mensuelles à fournir de la chaleur et du réconfort.
Les distributions permettent de fournir des repas chauds et des produits de première
nécessité. Nous veillons également à fournir des vêtements adaptés aux différentes saisons.
          </p>
        </div>
        <div className="maraudes-image">
          <Image src="/images/maraude1.jpg" alt="Maraude Karam Team" width={500} height={350} />
        </div>
      </div>

      {/* ✅ Faire un Don */}
      <div className="don-section">
        <h2>Faire un don €</h2>
        <div className="don-buttons">
          <button className="bancaire-button">Bancaire<br/>IBAN : FR76 1695 8000 0199 4230 2190 077</button>
          <button className="paypal-button">Paypal</button>
        </div>
      </div>

      {/* ✅ Icônes et texte aligné */}
      <div className="donation-info">
        <div className="donation-title">
          <Image src="/t-shirt.png" alt="Vêtements" width={50} height={0} />
          <span>Faire un don</span>
          <Image src="/nourriture.png" alt="Produits alimentaires" width={60} height={40} />
        </div>
        <p className="donation-text">
        Au-delà de l’aide matérielle, les maraudes de Karam Team
sont un moment de partage et d’écoute. C’est l’occasion d’échanger avec les bénéficiaires
mais également entre bénévoles. Chaque action est guidée par des valeurs de solidarité, de
bienveillance mais avant tout de respect.<br/><br/>
Tu souhaites faires des dons matériels : denrées alimentaires, vêtements, produits
d’hygiène, produits de premiers soins… ?<br/>
N’hésite pas à nous contacter via notre rubrique{" "}
  <a href="/contact" className="contact-link">NOUS CONTACTER</a>, 
  Karam Team réalise des collectes tout au long de l’année.
        </p>
      </div>
    </div>
  );
}
