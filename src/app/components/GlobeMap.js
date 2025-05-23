// components/KaramTeamGlobe.tsx
"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import Globe component to disable SSR
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const projectData = [
  {
    title: "Maraudes à Paris",
    description: "Distribution de repas chauds dans le 19e arrondissement",
    lat: 48.884,
    lng: 2.35,
    image: "/slider-about10.jpeg",
  },
  {
    title: "Kits scolaires à Casablanca",
    description: "Fournitures distribuées à une école primaire au Maroc",
    lat: 33.5731,
    lng: -7.5898,
    image: "/education.jpeg",
  },
  {
    title: "Château d'eau au Cambodge",
    description: "Accès à l’eau potable dans un village rural",
    lat: 11.5449,
    lng: 104.8922,
    image: "/international.jpeg",
  },
];

export default function KaramTeamGlobe() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      style={{
        height: "600px",
        width: "100%",
        position: "relative",
        marginTop: "60px",
      }}
    >
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="#f0f0f0"
        pointsData={projectData}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={() => "#e91e63"} // rose
        pointAltitude={0.05}
        pointRadius={0.25}
        pointLabel={(d) => d.title}
        onPointClick={setSelectedProject}
      />

      {selectedProject && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "rgba(255, 255, 255, 0.98)",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
            maxWidth: "300px",
            zIndex: 10,
          }}
        >
          <button
            style={{
              float: "right",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            onClick={() => setSelectedProject(null)}
          >
            ✕
          </button>
          <strong>{selectedProject.title}</strong>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
          />
          <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
            {selectedProject.description}
          </p>
        </div>
      )}
    </div>
  );
}
