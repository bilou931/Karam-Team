"use client";

import { useRouter } from "next/navigation";
import "./projects.css";

const projets = [
  { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
  { name: "Éducation", slug: "education", image: "/education.jpeg" },
  { name: "International", slug: "international", image: "/international.jpeg" },
  { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
  // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
];

export default function Projects() {
  const router = useRouter();

  return (
    <div className="projects-container">
      <h1 className="projects-title">Nos Projets</h1>
      <div className="text-container">
        <div className="project-text-under-title">
          <p>Chaque jour nous agissons pour venir en aide aux communautés les plus démunies que ce soit en France ou à l’international. Plus qu’un simple apport matériel, ce sont de réels moments de partage et de solidarité que nous cherchons à vivre avec nos chers bénéficiaires.</p>
        </div>  
      </div>
      <div className="container-projects">
      <div className="projects-grid2">
        {projets.map((projet) => (
          <div
            key={projet.slug}
            className="project-card2"
            onClick={() => router.push(`/projects/${projet.slug}`)}
          >
            <img src={projet.image} alt={projet.name} className="project-image2" />
            <div className="project-overlay2">
              <span className="project-text2">{projet.name}</span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
