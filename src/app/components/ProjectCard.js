"use client";

import React from "react";
import "./ProjectCard.css"; // Importation du CSS
import Link from "next/link";

export default function ProjectCard({ image, title, description, redirect }) {
  return (
    <div className="project-card-home">
      <img src={image} alt={title} />
      <div className="project-info">
        <div className="all-text">
            <div className="div-text">
                <div className="div-title">
                    <h3 className="project-title-home">{title}</h3>
                </div>
                    {/* <p className="project-description">{description}</p> */}
                    <p className="project-description-home" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <Link href={redirect} className="custom-button">
              En savoir plus <span className="button-arrow">→</span>
            </Link>

        </div>

      </div>
    </div>
  );
}

