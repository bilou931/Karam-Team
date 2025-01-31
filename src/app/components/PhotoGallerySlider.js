"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./PhotoGallerySlider.css";

const photos = [
  "/image1.jpeg",
  "/image00002.jpeg",
  "/image00003.jpeg",
  "/image00004.jpeg",
  "/image00005.jpeg",
  "/image00006.jpeg",
  "/image00007.jpeg",
  "/image1.jpeg",
  "/image00002.jpeg",
  "/image00003.jpeg",
  "/image00004.jpeg",
  "/image00005.jpeg",
  "/image00006.jpeg",
  "/image00007.jpeg",
  "/image1.jpeg",
  "/image00002.jpeg",
  "/image00003.jpeg",
  "/image00004.jpeg",
  "/image00005.jpeg",
  "/image00006.jpeg",
  "/image00007.jpeg",
];

export default function PhotoGallerySlider() {
  const [index, setIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? photos.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === photos.length - 3 ? 0 : prevIndex + 1));
  };

  const openModal = (selectedIndex) => {
    setIndex(selectedIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevModalSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const nextModalSlide = () => {
    setIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="photo-gallery">
        <ChevronLeft onClick={prevSlide} className="gallery-button" size={44} />

        <div className="gallery-container">
          <div
            className="gallery-track"
            style={{
              transform: `translateX(-${index * 33.33}%)`,
            }}
          >
            {photos.map((photo, i) => (
              <div className="gallery-item" key={i} onClick={() => openModal(i)}>
                <img src={photo} alt={`Photo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <ChevronRight onClick={nextSlide} className="gallery-button" size={44} />
      </div>

      {/* Modal pour afficher l'image en grand */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <X size={32} />
            </button>
            <ChevronLeft className="modal-button button-left" onClick={prevModalSlide} size={44} />
            <img src={photos[index]} alt="Full screen" className="modal-image" />
            <ChevronRight className="modal-button button-right" onClick={nextModalSlide} size={44} />
          </div>
        </div>
      )}
    </>
  );
}
