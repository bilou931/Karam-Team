"use client"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import './NavBar.css'
import { useState } from "react";
import Link from "next/link";


export default function Navbar () {
  const [hoveredLink, setHoveredLink] = useState(null);
  const router = useRouter();
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    return (
        <nav className="navbar">
        {/* Logo */}
        <div className="logo-container" onClick={() => router.push("/")}>
          <img
            src="/karam_team_logo1.png" // Remplacez par le chemin de votre logo
            alt="Karam Team Logo"
            className="logo-img"
            // width={50}
            // height={90}
          />
          <div className="logo-text-div">
              <span className="logo-text">KaramTeam</span>
              <span className="logo-text-humanity">Humanity</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
        <li onClick={()=>router.push("/")} className={`nav-link ${isActive("/") ? "active" : ""}`}>
          Accueil
        </li>
        <li onClick={()=>router.push("/projects")} 
        className={`nav-link ${isActive("/projects") ? "active" : ""}`}
        onMouseEnter={() => setHoveredLink("projects")}
          onMouseLeave={() => setHoveredLink(null)}>
            Nos Projets
            {hoveredLink === "projects" && (
            <ul className="dropdown-menu">
            <li>
              <Link href="/projects/distribution" onClick={(e) => e.stopPropagation()}>Distribution</Link>
            </li>
            <li>
              <Link href="/projects/education" onClick={(e) => e.stopPropagation()}>Éducation</Link>
            </li>
            <li>
              <Link href="/projects/international" onClick={(e) => e.stopPropagation()}>International</Link>
            </li>
            <li>
              <Link href="/projects/ramadan" onClick={(e) => e.stopPropagation()}>Ramadan</Link>
            </li>
            </ul>
          )}
        </li>
        <li onClick={()=>router.push("/collectes")} 
        className={`nav-link ${isActive("/collectes") ? "active" : ""}`}
        onMouseEnter={() => setHoveredLink("collectes")}
        onMouseLeave={() => setHoveredLink(null)}>
            Nos Collectes
            {hoveredLink === "collectes" && (
            <ul className="dropdown-menu">
               <li>
              <Link href="/collectes/maraudes" onClick={(e) => e.stopPropagation()}>Maraudes</Link>
            </li>
            <li>
              <Link href="/collectes/projets-en-cours" onClick={(e) => e.stopPropagation()}>Projets en cours</Link>
            </li>
            </ul>
          )}
        </li>
        <li onClick={()=>router.push("/about")} className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            A Propos
          
        </li>
        <li onClick={()=>router.push("/contact")} 
        className={`nav-link ${isActive("/contact") ? "active" : ""}`}
        onMouseEnter={() => setHoveredLink("contact")}
          onMouseLeave={() => setHoveredLink(null)}>
            Contact
            {hoveredLink === "contact" && (
            <ul className="dropdown-menu">
              <li onClick={() => router.push("/contact")}>Une question ?</li>
              <li>
                  <Link href="/contact/rejoindre" onClick={(e) => e.stopPropagation()}>Nous Rejoindre</Link>
              </li>
            </ul>
          )}
        </li>
        {/* <li>
          <a href="/join" className={`nav-link ${isActive("/join") ? "active" : ""}`}>
            Nous Rejoindre
          </a>
        </li> */}
        <button onClick={()=>router.push("/collectes")} className="main-button">Faire un Don</button>
      </ul>
      </nav>
    )
}