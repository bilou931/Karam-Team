"use client"
import Image from "next/image";
import './page.css'
import ProjetSlider from "./components/ProjectSlider";
import PhotoGallerySlider from "./components/PhotoGallerySlider";



export default function Home() {

  return (
    <div className="">
      {/* Navbar */}
      
    <div className="body">
      {/* Main Content */}
      <div className="home-div-pink">
        <div className="content-section">
          <div className="main-info">
              <div className="sous-main-info">
                <h1 className="main-title">KaramTeam Humanity, Unis pour nourrir les coeurs et les corps</h1>
                <p className="main-subtitle">Nous pouvons tous venir en aide à quelqu'un.Ensemble, construisons un avenir meilleur.</p>
                <button className="main-button">Rejoignez-nous</button>
            </div>
          </div>
          <div className="home-picture">
            <div className="photo-grid">
              <div className="beginphoto">
              <img src="/image00013.jpeg" alt="Photo 1" className="photo" />
              <img src="/image00010.jpeg" alt="Photo 2" className="photo" />
              </div>
              <img src="image00020.jpeg" alt="Photo 3" className="photo-last" />
              {/* <img src="/image00006.jpeg" alt="Photo 4" className="photo" /> */}
                </div>
            </div>
          </div>
        </div>
        <div className="info-section">
          <ProjetSlider />
        </div>
        <div className="separator-div">
            <div className="separator"></div>
        </div>
        <div className="photo-gallery-div">
          <div className="photo-title-div">
              <p className="photo-title-text">Galerie Photo</p>
          </div>
          <PhotoGallerySlider/>
        </div>
      </div>
    </div>
  );
}
