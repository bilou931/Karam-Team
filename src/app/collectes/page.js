"use client";
import React from "react";
import "./collectes.css"; // Fichier CSS pour cette page
import CardContainer from "../components/CardContainer";

const projets = [
    { slug: "/collectes/maraudes", name: "Maraudes", image: "/slider-about9.jpeg" },
    { slug: "/collectes/projets-en-cours", name: "Projets en cours", image: "/en-cours-collectes.jpeg" },
  ];

export default function NosCollectes() {
  return (
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
            de vêtements et de fournitures scolaires pour venir en aide 
            aux plus démunis. Ensemble, participons à ces actions solidaires 
            et offrons un avenir meilleur.
          </p>
          </div>
        </div>
      </div>
      <CardContainer projets={projets}/>
    </div>
  );
}
