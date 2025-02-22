"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./RamadanVerticalSlider.css";

export default function RamadanVerticalSlider({images}) {
  const [index, setIndex] = useState(0);
  const totalImages = images.length;

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="vertical-slider-ramadan">
      {/* Flèche Haut */}
      <button onClick={prevSlide} className="slider-button up">
        <ChevronUp size={40} />
      </button>

      {/* Conteneur des images avec animation */}
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateY(-${index * 600}px)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="slider-item">
              <img src={img} alt={`Slide ${i + 1}`} className="slider-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Flèche Bas */}
      <button onClick={nextSlide} className="slider-button down">
        <ChevronDown size={40} />
      </button>
    </div>
  );
}
