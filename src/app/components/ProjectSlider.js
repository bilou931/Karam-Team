"use client";

import { useState } from "react";
import ProjetCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectSlider.css";


const projets = [
  {
    image: "/image00015.jpeg",
    title: "Maraude le Samedi 1er Février 2025",
    description: "✅ Participez à notre grande maraude du samedi 1er février 2025 à Gare de l'Est ! ✅<br/>Ensemble, apportons chaleur et réconfort à ceux qui en ont le plus besoin. 💚<br/><br/>Le samedi 1er février 2025, la Karam Team organise une maraude solidaire au cœur de Paris, à Gare de l'Est. L’hiver est une période difficile pour de nombreuses personnes sans-abri, et chaque geste compte.<br/>📍 Lieu : Gare de l'Est, Paris<br/>🕕 Horaire : 18h30 – 22h00<br/>🎯 Objectif : Distribution de repas chauds",
  },
  {
    image: "/image1.jpeg",
    title: "Construction d'une école",
    description: "Projet en cours pour financer une école au Sénégal.",
  },
  {
    image: "/images/collecte.jpg",
    title: "Collecte de dons",
    description: "Récolte de vêtements et matériel pour les familles en difficulté.",
  },
];

export default function ProjetSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? projets.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === projets.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="projet-slider">
  <h2>Actualité</h2>
  <div className="slider-container">
    {/* <button onClick={prevSlide} className="slider-button button-left"> */}
      <ChevronLeft className="slider-button button-left" onClick={prevSlide} size={44} />
    {/* </button> */}

    <div className="projet-card-wrapper">
      <ProjetCard {...projets[index]} />
    </div>

    {/* <button onClick={nextSlide} className="slider-button button-right"> */}
      <ChevronRight className="slider-button button-right" onClick={nextSlide} size={44} />
    {/* </button> */}
  </div>
</div>

  );
}
