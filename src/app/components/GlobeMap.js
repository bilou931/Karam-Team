// components/KaramTeamGlobe.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

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
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "40px" }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="#000"
        pointsData={projectData}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={() => "#e91e63"} // rose
        pointAltitude={0.03}
        pointRadius={0.15}
        pointLabel={(d) => d.title}
        onPointHover={setHoveredProject}
        onPointClick={(point) => alert(`${point.title}\n${point.description}`)}
      />

      {/* Optional custom tooltip display */}
      {hoveredProject && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            background: "rgba(255,255,255,0.95)",
            padding: "10px",
            borderRadius: "8px",
            maxWidth: "300px",
            zIndex: 1000,
          }}
        >
          <strong>{hoveredProject.title}</strong>
          <br />
          <img
            src={hoveredProject.image}
            alt={hoveredProject.title}
            style={{ width: "100%", borderRadius: "6px", marginTop: "8px" }}
          />
          <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
            {hoveredProject.description}
          </p>
        </div>
      )}
    </div>
  );
}
