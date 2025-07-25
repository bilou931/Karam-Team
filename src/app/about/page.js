"use client";

import { useEffect, useState, useRef } from "react";
import "./apropos.css";
import PhotoGallerySlider from "../components/PhotoGallerySlider";
import Head from "next/head";

const photos = [
  "/slider-about2.jpeg",
  "/slider-about3.jpeg",
  "/slider-about4.jpeg",
  "/slider-about5.jpeg",
  "/slider-about6.jpeg",
  "/slider-about7.jpeg",
  "/slider-about8.jpeg",
  "/slider-about9.jpeg",
  "/slider-about10.jpeg",
  "/slider-about11.jpeg",
  "/slider-about12.jpeg",
  "/slider-about13.jpeg",
  "/slider-about14.jpeg",
  "/slider-about15.jpeg",
  "/slider-about16.jpeg",
  "/slider-about17.jpeg",
  "/slider-about18.jpeg",
  "/slider-about19.jpeg",
  "/slider-about20.jpeg",
  "/slider-about21.jpeg",
  "/slider-about22.jpeg",
  "/slider-about23.jpeg",
  "/slider-about24.jpeg",
  "/slider-about25.jpeg",
];

export default function About() {
  return (
    <>
      <Head>
        <title>À propos – Karam Team</title>
        <meta
          name="description"
          content="Découvrez l’histoire, les valeurs et l’engagement humanitaire de l’association Karam Team, en France et à l’international."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, à propos, association humanitaire, solidarité, dons, entraide, France, Maroc, bénévolat"
        />
        <meta property="og:title" content="À propos – Karam Team" />
        <meta
          property="og:description"
          content="Karam Team est une association de jeunes femmes engagées, œuvrant pour les démunis. Découvrez notre mission."
        />
        <meta property="og:image" content="/slider-about1.jpeg" />
        <meta property="og:url" content="https://karamteam.fr/about" />
      </Head>

      <div className="about-container">
        {/* Section 1 : Qui sommes-nous ? */}
        <div className="text-container2-about">
          <div className="about-banner-background">
            <div className="about-banner-text">
              {/* ✅ Titre stylisé */}
              <div className="about-banner-title">
                <span className="title-black-about">À </span>
                <span className="title-green-about">Propos</span>
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
              Karam Team est au départ un groupe de jeunes femmes qui ont
              décidés d'unir leurs forces dans le but de venir en aide aux
              démunis. Après plusieurs cagnottes et projets, et au vu de la
              confiance des donateurs nous avons decider de créer une
              association humanitaire.
              <br></br>
              <br></br>"Karam" signifie en arabe "générosité", d'ou le choix de
              ce nom. C’est avant tout grâce à la générosité de tout un chacun
              que nous réussirons à mener de beaux projets. Nos actions sont
              menées en France et à l’étranger. Nous sommes conscients que nous
              ne pouvons pas aider tout le monde, mais tout le monde peut aider
              quelqu'un. Alors es tu prêt à faire parti de notre team ?
            </p>
          </div>
          <div className="about-image">
            {/* <img src="/apropos.jpeg" alt="Karam Team" /> */}
            <PhotoGallerySlider photos={photos} canOpen={false} />
          </div>
        </div>

        {/* Section 2 : Karam Team depuis 2024 */}
        <div className="about-history">
          <h2 className="history-title">Karam Team depuis 2024</h2>

          {/* Section 3 : Les chiffres de Karam Team */}
          <div className="stats-container">
            <StatCounter number={1550} text="Repas distribués" />
            <StatCounter number={150} text="Arbres plantés" />
            <StatCounter number={200} text="Kits scolaires distribués" />
          </div>
        </div>

        {/* Section 4 : Point Essentiel */}
        <div className="key-point">
          <h2 className="key-title">Point Essentiel</h2>
          <p className="key-description">
            L'intention mise dans la diffusion de photos/vidéos est celle de la
            TRANSPARENCE envers celles et ceux qui nous font confiance et qui
            nous confie leurs sadaqa pour les démunis. Elle n'est nullement
            ostentatoire.
          </p>
        </div>
      </div>
    </>
  );
}

/* Composant pour l'animation des chiffres */
function StatCounter({ number, text }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const hasAnimated = useRef(false); // ref pour garder l'état même après re-render
  const animationRef = useRef(null);

  const startCountAnimation = () => {
    let current = 0;
    const increment = Math.ceil(number / 100);

    animationRef.current = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(animationRef.current);
      } else {
        setCount(current);
      }
    }, 20);
  };

  const isInViewport = (el, offset = 0.1) => {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    const visibleHeight = Math.max(
      0,
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
    );
    const elementHeight = rect.height;

    return visibleHeight / elementHeight >= offset;
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;
      if (!element) return;

      if (isInViewport(element, 0.1)) {
        if (!hasAnimated.current) {
          startCountAnimation();
          hasAnimated.current = true;
        }
      } else {
        // reset seulement si complètement hors viewport
        if (hasAnimated.current) {
          setCount(0);
          hasAnimated.current = false;
          clearInterval(animationRef.current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check initial

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(animationRef.current);
    };
  }, [number]);

  return (
    <div className="stat-item" ref={containerRef}>
      <h3 className="stat-number">{count}</h3>
      <p className="stat-text">{text}</p>
    </div>
  );
}
