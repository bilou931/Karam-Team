"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import "./MapProject.css";

const DefaultIcon = L.icon({
  iconUrl: "/pin-rose.png", // <- ton icône perso
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

const projects = [
  {
    title: "Maraudes à Paris",
    description: "Distribution de repas chauds dans le 19e arrondissement",
    lat: 48.884,
    lon: 2.35,
    image: "/slider-about10.jpeg",
  },
  {
    title: "Kits scolaires à Casablanca",
    description: "Fournitures distribuées à une école primaire au Maroc",
    lat: 33.5731,
    lon: -7.5898,
    image: "/education.jpeg",
  },
  {
    title: "Château d'eau au Cambodge",
    description: "Accès à l’eau potable dans un village rural",
    lat: 11.5449,
    lon: 104.8922,
    image: "/international.jpeg",
  },
];

export default function KaramTeamMap() {
  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={[30, 10]}
        zoom={2}
        minZoom={2}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {projects.map((p, index) => (
          <Marker key={index} position={[p.lat, p.lon]}>
            <Popup>
              <strong>{p.title}</strong>
              <br />
              <img
                src={p.image}
                alt={`Projet : ${p.title}`}
                width="120"
                style={{ borderRadius: "8px", marginTop: "6px" }}
              />
              <br />
              <small>{p.description}</small>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
