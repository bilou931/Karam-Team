"use client";
import Image from "next/image";
import "./rejoindre.css"; // Import du CSS
import Head from "next/head";

export default function NousRejoindre() {
  return (
    <>
      <Head>
        <title>Nous Rejoindre – Karam Team</title>
        <meta
          name="description"
          content="Envie de devenir bénévole ? Rejoignez Karam Team et participez à des actions solidaires : maraudes, puits, éducation, repas pour les démunis."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, bénévolat, aide humanitaire, rejoindre association, solidarité, actions sociales"
        />
        <meta property="og:title" content="Nous Rejoindre – Karam Team" />
        <meta
          property="og:description"
          content="Participez aux actions humanitaires de Karam Team : plantation d’arbres, puits, maraudes, éducation. Devenez bénévole dès aujourd'hui."
        />
        <meta
          property="og:url"
          content="https://karamteam.fr/contact/rejoindre"
        />
      </Head>
      <div className="nous-rejoindre-container">
        {/* ✅ Bannière avec image et titre */}
        <div className="nous-rejoindre-banner">
          <h1 className="nous-rejoindre-title">
            <span className="text-white">Nous</span>{" "}
            <span className="text-green">Rejoindre</span>
          </h1>
        </div>

        {/* ✅ Texte explicatif */}
        <div className="nous-rejoindre-content">
          <p>
            Vous souhaitez apporter votre aide aux plus démunis ? Vous avez du
            temps, de l’énergie et l’envie d’agir pour une cause noble ?{" "}
            <strong>Karam Team a besoin de vous !</strong>
          </p>
          <br />
          <p>
            En tant que bénévole, vous aurez l’opportunité de participer à nos
            différentes actions :
          </p>

          <ul className="custom-list">
            <li>- Plantation d’arbres fruitiers</li>
            <li>- Construction de puits</li>
            <li>- Distribution de kits scolaires aux orphelins</li>
            <li>- Organisation de maraudes</li>
            <li>
              - Organisation de repas solidaires, notamment pour l’Aïd et
              d’autres occasions spéciales
            </li>
          </ul>
          <br />
          <p>
            Chacun peut aider à sa manière : sur le terrain, en organisant des
            collectes ou simplement en partageant nos actions autour de soi.
          </p>

          <p>
            <strong>
              Ensemble, apportons de l’espoir et du soutien à ceux qui en ont
              besoin !
            </strong>
          </p>
        </div>

        {/* ✅ Lien WhatsApp */}
        <div className="whatsapp-section">
          <p className="whatsapp-rejoindre-text">
            Rejoignez notre groupe WhatsApp pour être informé de nos prochaines
            actions !
          </p>
          <a
            href="https://chat.whatsapp.com/EFh3aGCpj9SLdGYcqRShyt" // Remplace par ton lien WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <Image
              src="/whatsapp.png"
              alt="WhatsApp Logo"
              width={40}
              height={40}
            />
            Rejoindre le groupe WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
