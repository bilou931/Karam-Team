"use client";
import Image from "next/image";
import "./page.css";
import ProjetSlider from "./components/ProjectSlider";
import PhotoGallerySlider from "./components/PhotoGallerySlider";
import { useRouter } from "next/navigation";
import Head from "next/head";
import MapWrapper from "./components/MapProjectClient";
import KaramTeamGlobe from "./components/GlobeMap";

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

export default function Home() {
  const router = useRouter();
  const avis = [
    {
      nom: "Imane",
      commentaire:
        "Barak Allahou fikoum, je tenais à vous remercier de m’avoir permis de participer à cette maraude. C’était ma première fois, et franchement, j’ai été agréablement surprise par l’organisation, l’ambiance et surtout l’esprit de solidarité qui régnait tout au long de la soirée. J’ai ressenti une immense gratitude de pouvoir apporter ma petite pierre à l’édifice.J’ai hâte d’en refaire une, inshallah, et de continuer à donner de mon temps pour ces actions essentielles. Encore merci pour votre accueil.",
    },
    {
      nom: "Redouane",
      commentaire:
        "J'ai eu l'occasion de voir leur travail de près, et l'impact est incroyable. Bravo à toute l'équipe !",
    },
    {
      nom: "Fatima",
      commentaire:
        "Donner à cette association m’a permis de contribuer à une vraie cause. Merci pour ce que vous faites !",
    },
  ];
  return (
    <>
      <Head>
        <link rel="icon" href="/karam_team_logo1.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Karam Team",
              url: "https://karamteam.fr",
              logo: "https://karamteam.fr/karam_team_logo1.png",
            }),
          }}
        />
        <title>Karam Team Humanity – Aide humanitaire & solidarité</title>
        <meta
          name="description"
          content="Karam Team est une association humanitaire engagée dans les maraudes, distributions de repas, actions éducatives et missions internationales. Unis pour nourrir les cœurs et les corps."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, Karamteam, association humanitaire, dons, maraude, solidarité, entraide, don, éducation, distribution, ramadan"
        />
        <meta name="author" content="Karam Team" />
        <meta property="og:title" content="Karam Team Humanity" />
        <meta
          property="og:description"
          content="Unis pour nourrir les cœurs et les corps – Faites un don, rejoignez-nous."
        />
        <meta property="og:image" content="/karam_team_logo1.png" />
        <meta property="og:url" content="https://karamteam.fr" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="">
        {/* Navbar */}

        <div className="body">
          {/* Main Content */}
          <div className="home-div-pink">
            <div className="content-section">
              {/* Vidéo de fond */}
              <div className="video-container">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="background-video"
                >
                  <source src="/video_background_cut.mp4" type="video/mp4" y />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>

              <div className="overlay">
                <div className="main-info">
                  <div className="sous-main-info">
                    <h1 className="main-title">
                      Karam Team Humanity <br></br>
                    </h1>
                    <p className="main-subtitle">
                      Unis pour nourrir les{" "}
                      <span className="highlight-text">coeurs</span> et les{" "}
                      <span className="highlight-text">corps</span>.
                    </p>
                  </div>
                  <div className="button-video-home">
                    <button
                      onClick={() => router.push("/collectes/maraudes")}
                      className="don-button-home"
                    >
                      Faire un Don
                    </button>
                    <button
                      onClick={() => router.push("/contact/rejoindre")}
                      className="don-button-home"
                    >
                      Nous Rejoindre
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="photo-gallery-div">
            <div className="photo-title-div">
              <p className="photo-title-text">GALERIE PHOTO</p>
            </div>
            <PhotoGallerySlider photos={photos} canOpen={true} />
          </div>
          <div className="info-section">
            <ProjetSlider />
          </div>
          <div className="all-map-div">
            <p className="photo-title-text">NOS ACTIONS MONDIALES</p>
            <MapWrapper />
            {/* <KaramTeamGlobe /> */}
          </div>
          <div className="confiance-section">
            <div className="overlay"></div>
            {/* <h2 className="section-title">Ils nous font confiance</h2> */}
            <div className="avis-container">
              <div className="avis-left">
                <div className="avis-card">
                  {avis[0] && (
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
    </>
  );
}
