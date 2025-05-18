"use client";
import { useRouter } from "next/navigation";
import "./CardContainer.css";

export default function CardContainer({ projets }) {
  const router = useRouter();

  return (
    <div className="container-projects">
      <div className="projects-grid2">
        {projets.map((projet) => (
          <div
            key={projet.slug}
            className="project-card2"
            onClick={() => router.push(`${projet.slug}`)}
          >
            <img
              src={projet.image}
              alt={`Illustration du projet ${projet.name} de Karam Team`}
              className="project-image2"
            />
            <div className="project-overlay2">
              <span className="project-text2">{projet.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
