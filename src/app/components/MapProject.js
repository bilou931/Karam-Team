"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import "./MapProject.css";
import { projects } from "../utils/projectList";
import { useRouter } from "next/navigation";

const DefaultIcon = L.icon({
  iconUrl: "/pin-rose.png", // <- ton icône perso
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [35, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

function groupProjectsByCoordinates(data) {
  const grouped = {};
  data.forEach((project) => {
    const key = `${project.lat},${project.lng}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(project);
  });
  return Object.entries(grouped).map(([coords, items]) => {
    const [lat, lng] = coords.split(",").map(Number);
    return { lat, lng, projects: items };
  });
}

export default function KaramTeamMap() {
  const router = useRouter();
  useEffect(() => {
    import("leaflet/dist/leaflet.css");
  }, []);
  const groupedMarkers = groupProjectsByCoordinates(projects);
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
        {groupedMarkers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]}>
            <Popup>
              {marker.projects.length > 1 ? (
                <div style={{ maxHeight: "250px", overflowY: "auto" }}>
                  {marker.projects.map((p, i) => (
                    <div
                      key={i}
                      style={{ cursor: "pointer", marginBottom: "12px" }}
                      onClick={() => router.push(p.redirect)}
                    >
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
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  onClick={() => router.push(marker.projects[0].redirect)}
                  style={{ cursor: "pointer" }}
                >
                  <strong>{marker.projects[0].title}</strong>
                  <br />
                  <img
                    src={marker.projects[0].image}
                    alt={`Projet : ${marker.projects[0].title}`}
                    width="120"
                    style={{ borderRadius: "8px", marginTop: "6px" }}
                  />
                  <br />
                  <small>{marker.projects[0].description}</small>
                </div>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
