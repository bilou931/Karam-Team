"use client";

import { useState } from "react";
import ProjetCard from "./ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProjectSlider.css";
import { redirect } from "next/dist/server/api-utils";


const projets = [
  {
    image: "/image00015.jpeg",
    title: "Maraudes Ramadan",
    description: "✅ Participez a nos maraudes spéciales Ramadan tous les samedis ! ✅<br/>Ensemble, apportons chaleur et réconfort. 💚<br/>Chaque geste compte !<br/><br/>📍 Lieu : Porte de la Villette, Paris<br/>🕕 Horaire : 18h00<br/>📅 Date : Samedis 8, 15, 22 et 29 mars 2025",
    redirect: "/collectes/maraudes"
  },
  {
    image: "/image1.jpeg",
    title: "Nos étoiles",
    description: "Pour la 3ème fois consécutive, nous ouvrons cette cagnotte afin de financer une cause nous tenant particulièrement à cœur : les orphelins.<br/><br/> Plus que tout, nous souhaitons leur offrir une vie dans des conditions dignes, entourés d’espoir et d’amour .<br/>🙏 Nous appelons à votre mobilisation, votre générosité et votre engagement.<br/>📌 À noter : Chaque don est une Sadaqa Jariya, une action qui portera ses fruits même après votre mort. ",
    redirect: "/collectes/projets-en-cours"
  },
  {
    image: "image00023.jpeg",
    title: "Les Collectes",
    description: "Tu souhaites faire des dons matériels ?<br/><br/>🍞 Denrées alimentaires, 👕 vêtements, 🧴 produits d’hygiène, 💊 produits de premiers soins… Chaque don compte !<br/><br/> N’hésite pas à nous contacter, Karam Team réalise des collectes tout au long de l’année.",
    redirect: "/collectes/maraudes"
  },
];

export default function ProjetSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(""); // "slide-left" ou "slide-right"

  const prevSlide = () => {
    setDirection("slide-right");
    setTimeout(() => {
      setIndex(index === 0 ? projets.length - 1 : index - 1);
      setDirection("");
    }, 300);
  };

  const nextSlide = () => {
    setDirection("slide-left");
    setTimeout(() => {
      setIndex(index === projets.length - 1 ? 0 : index + 1);
      setDirection("");
    }, 300);
  };
  return (
    <div className="projet-slider">
      <div className="actuality-title-div">
          <h2 className="actuality-title-text">ACTUALITÉS</h2>
      </div>

      <div className="slider-container-home">
        <ChevronLeft className="slider-button button-left" onClick={prevSlide} size={44} />

        <div className={`projet-card-wrapper ${direction}`}>
          <ProjetCard {...projets[index]} />
        </div>

        <ChevronRight className="slider-button button-right" onClick={nextSlide} size={44} />
      </div>
    </div>
  );
}
