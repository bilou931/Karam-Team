"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import './NavBar.css'


export default function Navbar () {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    return (
        <nav className="navbar">
        {/* Logo */}
        <div className="logo-container">
          <Image
            src="/karam_team_logo1.png" // Remplacez par le chemin de votre logo
            alt="Karam Team Logo"
            width={50}
            height={90}
          />
          <div className="logo-text-div">
              <span className="logo-text">KaramTeam</span>
              <span className="logo-text-humanity">Humanity</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
        <li>
          <a href="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`}>
            Nos Projets
          </a>
        </li>
        <li>
          <a href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            À Propos
          </a>
        </li>
        <li>
          <a href="/donate" className={`nav-link ${isActive("/donate") ? "active" : ""}`}>
            Faire un Don
          </a>
        </li>
        <li>
          <a href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            Nous Contacter
          </a>
        </li>
        {/* <li>
          <a href="/join" className={`nav-link ${isActive("/join") ? "active" : ""}`}>
            Nous Rejoindre
          </a>
        </li> */}
        <button className="main-button">Rejoignez-nous</button>
      </ul>
      </nav>
    )
}