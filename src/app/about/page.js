"use client";

import { useEffect, useState } from "react";
import "./apropos.css";

export default function About() {
  return (
    <div className="about-container">
      {/* Section 1 : Qui sommes-nous ? */}
      <div className="text-container2">
      <div className="collectes-background">
        <div className="collectes-text">
          {/* ✅ Titre stylisé */}
      <div className="collectes-title">
        <span className="title-black">À </span>
        <span className="title-green">Propos</span>
      </div>
          {/* <p>
            Chaque année, Karam Team organise des collectes de nourriture, 
            de vêtements et de fournitures scolaires pour venir en aide 
            aux plus démunis. Ensemble, participons à ces actions solidaires 
            et offrons un avenir meilleur.
          </p> */}
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-text">
          <h2 className="about-title">Qui sommes-nous ?</h2>
          <p className="about-description">
          Karam Team est au départ un groupe de jeunes femmes qui ont décidés d'unir leurs forces dans le but de venir en aide aux démunis. 
Après plusieurs cagnottes et projets, et au vu de la confiance des donateurs nous avons decider de créer une association humanitaire. 
<br></br><br></br>"Karam" signifie en arabe "générosité", d'ou le choix de ce nom. C’est avant tout grâce à la générosité de tout un chacun que nous réussirons à mener de beaux projets. 
Nos actions sont menées en France et à l’étranger. 
Nous sommes conscients que nous ne pouvons pas aider tout le monde, mais tout le monde peut aider quelqu'un.
Alors es tu prêt à faire parti de notre team ?
          </p>
        </div>
        <div className="about-image">
          <img src="/apropos.jpeg" alt="Karam Team" />
        </div>
      </div>

      {/* Section 2 : Karam Team depuis 2024 */}
      <div className="about-history">
        <h2 className="history-title">Karam Team depuis 2024</h2>

      {/* Section 3 : Les chiffres de Karam Team */}
      <div className="stats-container">
        <StatCounter number={1350} text="Repas distribués" />
        <StatCounter number={150} text="Arbres plantés" />
        <StatCounter number={200} text="Kits scolaires distribués" />
      </div>
      </div>


      {/* Section 4 : Point Essentiel */}
      <div className="key-point">
        <h2 className="key-title">Point Essentiel</h2>
        <p className="key-description">
        L'intention mise dans la diffusion de photos/vidéos est celle de la TRANSPARENCE envers celles et ceux qui nous font confiance et qui nous confie leurs sadaqa pour les démunis. 
Elle n'est nullement ostentatoire.
        </p>
      </div>
    </div>
  );
}

/* Composant pour l'animation des chiffres */
function StatCounter({ number, text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(number / 100); // Animation fluide
    const interval = setInterval(() => {
      start += increment;
      if (start >= number) {
        setCount(number);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20); // Vitesse de l'animation

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="stat-item">
      <h3 className="stat-number">{count}</h3>
      <p className="stat-text">{text}</p>
    </div>
  );
}
