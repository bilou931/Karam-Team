// components/MapProjectClient.js
"use client";

import dynamic from "next/dynamic";

// Dynamically import the map with SSR disabled
const MapProject = dynamic(() => import("./MapProject"), {
  ssr: false,
  loading: () => <p>Chargement de la carte...</p>, // optionnel
});

export default function MapWrapper() {
  return <MapProject />;
}
