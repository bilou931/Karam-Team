"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Import dynamiques, chargés uniquement quand nécessaire
const MapProjectClient = dynamic(() => import("./MapProjectClient"), {
  ssr: false,
  loading: () => <p>Chargement de la carte...</p>,
});
const KaramTeamGlobe = dynamic(() => import("./GlobeMap"), {
  ssr: false,
  loading: () => <p>Chargement du globe...</p>,
});

export default function MapOrGlobeSwitcher() {
  const [mode, setMode] = useState("map");

  return (
    <div style={{ width: "100%", marginTop: "40px" }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setMode(mode === "map" ? "globe" : "map")}
          style={{
            backgroundColor: "#89b982",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Voir en {mode === "map" ? "Globe" : "Carte"}
        </button>
      </div>

      {/* Chargement conditionnel */}
      {mode === "map" && <MapProjectClient />}
      {mode === "globe" && <KaramTeamGlobe />}
    </div>
  );
}
