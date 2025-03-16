"use client";

import { useRouter } from "next/navigation";
import "./projects.css";
import CardContainer from "../components/CardContainer";

const projets = [
  { name: "Distribution", slug: "/projects/distribution", image: "/distribution.jpeg" },
  { name: "Éducation", slug: "/projects/education", image: "/education.jpeg" },
  { name: "International", slug: "/projects/international", image: "/international.jpeg" },
  { name: "Ramadan", slug: "/projects/ramadan", image: "/ramadan.jpeg" },
  // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
];

export default function Projects() {
  const router = useRouter();

  return (
    <div className="projects-container">
      <div className="collectes-title">
        <span className="title-black">Nos </span>
        <span className="title-green">Projets</span>
      </div>
      <div className="text-container">
      <div className="project-text-background">
        <div className="project-text-under-title">
          <p>Depuis 2024, <br/>Karam Team agit pour venir en
             aide aux communautés les plus démunies <br/>que ce soit en France ou à 
             l’international.</p>
        </div> 
        </div> 
      </div>
      <CardContainer projets={projets} />
      {/* <div className="container-projects">
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
      </div> */}
    </div>
  );
}
