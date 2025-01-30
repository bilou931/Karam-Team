"use client";

import React from "react";
import "./ProjectCard.css"; // Importation du CSS

export default function ProjectCard({ image, title, description }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-info">
        <div className="all-text">
            <div className="div-text">
                <div className="div-title">
                    <h3 className="project-title">{title}</h3>
                </div>
                    {/* <p className="project-description">{description}</p> */}
                    <p className="project-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <button className="custom-button">
              En savoir plus <span className="button-arrow">→</span>
            </button>

        </div>

      </div>
    </div>
  );
}

