"use client";

import { useRouter } from "next/navigation";
import "./projects.css";
import CardContainer from "../components/CardContainer";
import Head from "next/head";

const projets = [
  {
    name: "Distribution",
    slug: "/projects/distribution",
    image: "/distribution.jpeg",
  },
  { name: "Éducation", slug: "/projects/education", image: "/education.jpeg" },
  {
    name: "International",
    slug: "/projects/international",
    image: "/international.jpeg",
  },
  { name: "Ramadan", slug: "/projects/ramadan", image: "/ramadan.jpeg" },
];

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Nos projets solidaires – Karam Team</title>
        <meta
          name="description"
          content="Découvrez les projets de solidarité menés par Karam Team : distribution de repas, éducation, actions à l'international et opérations durant le Ramadan."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, projets solidaires, aide humanitaire, distribution, éducation, ramadan, international"
        />
        <meta property="og:title" content="Nos projets – Karam Team" />
        <meta
          property="og:description"
          content="Distribution, éducation, solidarité internationale et opérations spéciales – découvrez nos actions concrètes sur le terrain."
        />
        <meta property="og:image" content="/karam_team_logo1.png" />
        <meta property="og:url" content="https://karamteam.fr/projects" />
      </Head>
      <div className="projects-container">
        <div className="text-container">
          <div className="project-text-background">
            <div className="project-text-under-title">
              <div className="collectes-title">
                <span className="title-black">Nos </span>
                <span className="title-green">Projets</span>
              </div>
              <p>
                Depuis 2024, <br />
                Karam Team agit pour venir en aide aux communautés les plus
                démunies <br />
                que ce soit en France ou à l’international.
              </p>
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
    </>
  );
}
