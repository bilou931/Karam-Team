"use client"
import Image from "next/image";
import './page.css'
import ProjetSlider from "./components/ProjectSlider";
import PhotoGallerySlider from "./components/PhotoGallerySlider";



export default function Home() {
  const avis = [
    {
      nom: "Imane",
      commentaire: "Barak Allahou fikoum, je tenais à vous remercier de m’avoir permis de participer à cette maraude. C’était ma première fois, et franchement, j’ai été agréablement surprise par l’organisation, l’ambiance et surtout l’esprit de solidarité qui régnait tout au long de la soirée. J’ai ressenti une immense gratitude de pouvoir apporter ma petite pierre à l’édifice.J’ai hâte d’en refaire une, inshallah, et de continuer à donner de mon temps pour ces actions essentielles. Encore merci pour votre accueil.",
    },
    {
      nom: "Marc D.",
      commentaire: "J'ai eu l'occasion de voir leur travail de près, et l'impact est incroyable. Bravo à toute l'équipe !",
    },
    {
      nom: "Fatima R.",
      commentaire: "Donner à cette association m’a permis de contribuer à une vraie cause. Merci pour ce que vous faites !",
    },
  ];
  return (
    <div className="">
      {/* Navbar */}
      
    <div className="body">
      {/* Main Content */}
      <div className="home-div-pink">
        <div className="content-section">
           {/* Vidéo de fond */}
          <div className="video-container">
            <video autoPlay loop muted className="background-video">
              <source src="/video_background3.mp4" type="video/mp4"y/>
              Votre navigateur ne supporte pas la vidéo.
            </video> 
            </div>
            
          <div className="overlay">
          <div className="main-info">
              <div className="sous-main-info">
                <h1 className="main-title">Karam Team Humanity <br></br></h1>
                <p className="main-subtitle">
                  Unis pour nourrir les <span className="highlight-text">coeurs</span> et les <span className="highlight-text">corps</span>.
                </p>

            </div>
          </div>
          </div>
          {/* <div className="home-picture">
            <div className="photo-grid">
              <div className="beginphoto">
                <img src="/image00013.jpeg" alt="Photo 1" className="photo" />
                <img src="/image00010.jpeg" alt="Photo 2" className="photo" />
              </div>
                <img src="image00020.jpeg" alt="Photo 3" className="photo-last" />
                </div>
            </div> */}
          </div>
        </div>
    
        
        <div className="photo-gallery-div">
          <div className="photo-title-div">
              <p className="photo-title-text">Galerie Photo</p>
          </div>
          <PhotoGallerySlider/>
        </div>
        <div className="info-section">
          <ProjetSlider />
        </div>
        <div className="confiance-section">
      <div className="overlay"></div>
      {/* <h2 className="section-title">Ils nous font confiance</h2> */}
      <div className="avis-container">
            <div className="avis-left">
              <div className="avis-card">{avis[0] && (
                <>
                  <p className="avis-text">“{avis[0].commentaire}”</p>
                  <p className="avis-nom">— {avis[0].nom}</p>
                </>
              )}
                </div>
              </div>
        
      {/* Deux avis en colonne à droite */}
        <div className="avis-right">
          {avis.slice(1, 3).map((item, index) => (
            <div className="avis-card" key={index}>
              <p className="avis-text">“{item.commentaire}”</p>
              <p className="avis-nom">— {item.nom}</p>
            </div>
          ))}
        </div>
  

      </div>
  </div>
    </div>
  </div>
  );
}
