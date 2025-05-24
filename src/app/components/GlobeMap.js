// components/KaramTeamGlobe.tsx
"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import "./GlobeMap.css";
import { projects } from "../utils/projectList";

// Dynamically import Globe component to disable SSR
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function KaramTeamGlobe() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
  const globeRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // const height = Math.floor(width * 0.2); // ratio
        const height = 500; // ratio
        setDimensions({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Attendre que la scène soit prête
    const wait = setTimeout(() => {
      const controls = globe.controls();
      const camera = globe.camera();

      // Position de départ plus proche
      camera.position.z = 250;

      // Bloquer le zoom arrière
      controls.minDistance = 200;
      controls.maxDistance = 250;
    }, 500);

    return () => clearTimeout(wait);
  }, []);

  const handlePointClick = (point) => {
    const sameCoordsProjects = projects.filter(
      (p) => p.lat === point.lat && p.lng === point.lng
    );
    setSelectedProject(sameCoordsProjects);
    setPopupVisible(true);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="#f0f0f0"
        pointsData={projects}
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointColor={() => "pink"} // rose
        pointAltitude={0.1}
        pointRadius={2}
        pointLabel={(d) => d.title}
        onPointClick={handlePointClick}
      />

      {popupVisible && (
        <div className="div-popup-globe">
          <button
            className="exit-button-popup"
            onClick={() => setPopupVisible(false)}
          >
            ✕
          </button>
          {selectedProject.map((project, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <strong>{project.title}</strong>
              <img
                src={project.image}
                alt={project.title}
                className="img-popup-globe"
                onClick={() => (window.location.href = project.redirect)}
              />
              <p className="project-description-popup-globe">
                {project.description}
              </p>
              {i < selectedProject.length - 1 && <hr />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
