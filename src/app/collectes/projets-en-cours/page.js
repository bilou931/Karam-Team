"use client";
import Image from "next/image";
import "./projets-en-cours.css"; // Fichier CSS dédié
import Head from "next/head";

export default function ProjetsEnCours() {
  return (
    <>
      <Head>
        <title>Projets en cours – Karam Team</title>
        <meta
          name="description"
          content="Découvrez nos projets solidaires en cours, notamment la distribution de kits scolaires pour les enfants démunis au Maroc. Chaque geste compte !"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, projets en cours, orphelins, dons, kits scolaires, entraide, solidarité Maroc, aide humanitaire"
        />
        <meta property="og:title" content="Projets en cours – Karam Team" />
        <meta
          property="og:description"
          content="Participez à nos projets en cours : dons pour les orphelins, fournitures scolaires, éducation au Maroc. Chaque action compte."
        />
        <meta property="og:image" content="/encours-photo.jpeg" />
        <meta
          property="og:url"
          content="https://karamteam.fr/collectes/projets-en-cours"
        />
      </Head>
      <div className="en-cours-container">
        {/* ✅ Bannière avec image et titre */}
        <div className="en-cours-banner">
          <h1 className="en-cours-title">Projets en Cours</h1>
        </div>

        {/* ✅ Texte + Image */}
        <div className="en-cours-content">
          <div className="en-cours-text">
            <p>
              Karam Team s’engage également en faveur des orphelins et démunis
              au Maroc. Nous croyons en l’éducation comme levier de
              transformation sociale et travaillons activement pour offrir aux
              enfants les outils nécessaires à leur réussite scolaire.
              <br />
              <br />
              Notre objectif principal est de soutenir ces enfants en leur
              fournissant des kits scolaires complets. Nous voulons leur donner
              les meilleures chances de réussir leur parcours éducatif et de
              construire un avenir meilleur.
              <br />
              Chaque année, nous organisons des campagnes de collecte afin de
              réaliser la distribution de fournitures (cartables, cahiers,
              stylos, trousses, etc.) avant la rentrée.
              <br />
              <br />
              En rejoignant ou en soutenant Karam Team, vous contribuez
              directement à offrir un avenir meilleur à ces enfants. Chaque don,
              chaque action et chaque partage permet de faire la différence !
            </p>
          </div>
          <div className="en-cours-image">
            <Image
              src="/encours-photo.jpeg"
              alt="Projet en cours"
              width={350}
              height={350}
            />
          </div>
        </div>

        {/* ✅ Faire un Don */}
        <div className="don-section">
          <h2>Faire un don €</h2>
          <button
            className="don-button"
            onClick={() =>
              window.open("https://www.cotizup.com/ramadan-2025-kt", "_blank")
            }
          >
            Participer
          </button>
        </div>
      </div>
    </>
  );
}
