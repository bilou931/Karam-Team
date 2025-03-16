"use client";
import Image from "next/image";
import "./projets-en-cours.css"; // Fichier CSS dédié

export default function ProjetsEnCours() {
  return (
    <div className="en-cours-container">
      {/* ✅ Bannière avec image et titre */}
      <div className="en-cours-banner">
        <h1 className="en-cours-title">Projets en Cours</h1>
      </div>

      {/* ✅ Texte + Image */}
      <div className="en-cours-content">
        <div className="en-cours-text">
          <p>
          Karam Team s’engage également en faveur des orphelins et démunis au Maroc. Nous
croyons en l’éducation comme levier de transformation sociale et travaillons activement pour
offrir aux enfants les outils nécessaires à leur réussite scolaire.<br/><br/>
Notre objectif principal est de soutenir ces enfants en leur fournissant des kits scolaires
complets. Nous voulons leur donner les meilleures chances de réussir leur parcours éducatif
et de construire un avenir meilleur.<br/>
Chaque année, nous organisons des campagnes de collecte afin de réaliser la distribution
de fournitures (cartables, cahiers, stylos, trousses, etc.) 
avant la rentrée.<br/><br/>
En rejoignant ou en soutenant Karam Team, vous contribuez directement à offrir un avenir
meilleur à ces enfants. Chaque don, chaque action et chaque partage permet de faire la
différence !
          </p>
        </div>
        <div className="en-cours-image">
          <Image src="/images/projet-ecole.jpg" alt="Projet en cours" width={500} height={350} />
        </div>
      </div>

      {/* ✅ Faire un Don */}
      <div className="don-section">
        <h2>Faire un don €</h2>
        <button className="don-button">Participer</button>
      </div>
    </div>
  );
}
