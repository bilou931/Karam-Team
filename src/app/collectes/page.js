"use client";
import React from "react";
import "./collectes.css"; // Fichier CSS pour cette page
import CardContainer from "../components/CardContainer";
import Head from "next/head";

const projets = [
  {
    slug: "/collectes/maraudes",
    name: "Maraudes",
    image: "/slider-about9.jpeg",
  },
  {
    slug: "/collectes/projets-en-cours",
    name: "Projets en cours",
    image: "/en-cours-collectes.jpeg",
  },
];

export default function NosCollectes() {
  return (
    <>
      <Head>
        <title>Collectes Solidaires | Karam Team</title>
        <meta
          name="description"
          content="Participez aux collectes de nourriture, vêtements et fournitures scolaires de Karam Team pour venir en aide aux plus démunis."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, collectes, solidarité, maraudes, dons, vêtements, nourriture, fournitures scolaires, aide humanitaire"
        />
        <meta property="og:title" content="Collectes – Karam Team" />
        <meta
          property="og:description"
          content="Chaque année, Karam Team organise des collectes solidaires pour soutenir les plus démunis : vêtements, nourriture, fournitures scolaires."
        />
        <meta property="og:image" content="/slider-about9.jpeg" />
        <meta property="og:url" content="https://karamteam.fr/collectes" />
      </Head>
      <div className="collectes-container">
        {/* ✅ Section avec fond d'image et texte */}
        <div className="text-container2">
          <div className="collectes-background">
            <div className="collectes-text">
              {/* ✅ Titre stylisé */}
              <div className="collectes-title">
                <span className="title-black">Nos </span>
                <span className="title-green">Collectes</span>
              </div>
              <p>
                Chaque année, Karam Team organise des collectes de nourriture,
                de vêtements et de fournitures scolaires pour venir en aide aux
                plus démunis. Ensemble, participons à ces actions solidaires et
                offrons un avenir meilleur.
              </p>
            </div>
          </div>
        </div>
        <CardContainer projets={projets} />
      </div>
    </>
  );
}
