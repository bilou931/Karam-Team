"use client";

import { useRouter } from "next/navigation";
import "./ProjectSection.css";

export default function ProjectSectionWithExtra({
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
          <h2 className="project-sous-title">Puits</h2>
          <p className="project-description" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>

        {/* Vidéo à droite */}
        <div className="project-video">
          <video autoPlay loop muted className="international-video">
            <source src={"/puits.mp4"} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      </div>

      <div className="separator-project"></div>


      <div className="project-content">
      <div className="project-text">
          <h2 className="project-sous-title">Arbre</h2>
        <p className="project-extra" dangerouslySetInnerHTML={{ __html: extraText }}></p>
        </div>

         {/* Vidéo à droite */}
         <div className="project-video">
          <video autoPlay loop muted className="international-video-arbre">
            <source src={"/arbre.mp4"} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

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
