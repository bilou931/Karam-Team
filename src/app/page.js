import Image from "next/image";
import './page.css'
import ProjetSlider from "./components/ProjectSlider";



export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <Image
            src="/karam-logo.svg" // Remplacez par le chemin de votre logo
            alt="Karam Team Logo"
            width={50}
            height={50}
          />
          <span className="logo-text">KaramTeam</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#projects" className="nav-link">Nos Projets</a>
          </li>
          <li>
            <a href="#about" className="nav-link">À Propos</a>
          </li>
          <li>
            <a href="#donate" className="nav-link">Faire un Don</a>
          </li>
          <li>
            <a href="#contact" className="nav-link">Nous Contacter</a>
          </li>
          <li>
            <a href="#join" className="nav-link">Nous Rejoindre</a>
          </li>
        </ul>
      </nav>
    <div className="body">
      {/* Main Content */}
      <div className="home-div-pink">
        <div className="content-section">
          <div className="main-info">
              <div className="sous-main-info">
                <h1 className="main-title">KaramTeam Humanity</h1>
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
      </div>
    </div>
  );
}
