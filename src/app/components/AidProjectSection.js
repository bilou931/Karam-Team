"use client";

import { useRouter } from "next/navigation";
import "./AidProjectSection.css";
import VerticalSlider from "./VerticalSlider";
import CardContainer from "./CardContainer";


const images = [
    "/petit-dej1.jpeg",
  //   "/petit-dej2.jpeg",
    "/petit-dej3.jpg",
  //   "/images/photo4.jpg",
  //   "/images/photo5.jpg",
  ];
  
export default function AidProjectSection({
  title,
  description,
  extraText,
  videoSrc,
  otherProjects,
}) {
  const router = useRouter();

  return (
    <div className="project-detail-container">
          <h1 className="project-title">{title}</h1>

      {/* Section principale */}
      <div className="project-content">
        {/* Texte à gauche */}
        <div className="project-text">
          <h2 className="project-sous-title">Petit-Déjeuner</h2>
          <p className="project-description">La distribution alimentaire et matérielle est un pilier essentiel de nos actions.
        Chaque jour, nous aidons des centaines de personnes en situation de précarité en leur fournissant
        des repas chauds, des vêtements et des produits de première nécessité.</p>
        </div>

        {/* Vidéo à droite */}
        <VerticalSlider images={images}/>
        {/* <div className="project-video">
          <video autoPlay loop muted className="international-video">
            <source src={"/puits.mp4"} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div> */}
      </div>

      <div className="separator-project"></div>


      <div className="project-content">
      <div className="project-text">
          <h2 className="project-sous-title">Un mouton pour tous !</h2>
        <p className="project-description">La distribution alimentaire et matérielle est un pilier essentiel de nos actions.
        Chaque jour, nous aidons des centaines de personnes en situation de précarité en leur fournissant
        des repas chauds, des vêtements et des produits de première nécessité.</p>
        </div>
        
         {/* Vidéo à droite */}
         {/* <div className="project-video">
          <video autoPlay loop muted className="international-video-arbre">
            <source src={"/arbre.mp4"} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div> */}


      </div>
      {/* Navigation vers les autres projets */}
      <h2 className="related-title">Découvrez nos autres projets</h2>
       <div className="related-projects">
         {otherProjects.map((projet) => (
          <div
            key={projet.slug}
            className="project-card"
            onClick={() => router.push(`/projects/${projet.slug}`)}
          >
            <img src={projet.image} alt={projet.name} className="project-image" />
            <div className="project-overlay">
              <span className="project-text">{projet.name}</span>
            </div>
          </div>
        ))} 
      </div> 
    </div>
  );
}
