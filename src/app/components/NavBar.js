"use client"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import './NavBar.css'
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar () {
  const [hoveredLink, setHoveredLink] = useState(null);
  const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null); 
    const isActive = (path) => pathname === path;
    return (
        <nav className="navbar">
        {/* Logo */}
        <div className="logo-container" onClick={() => router.push("/")}>
          <img
            src="/karam_team_logo1.png" // Remplacez par le chemin de votre logo
            alt="Karam Team Logo"
            className="logo-img"
          />
          <div className="logo-text-div">
              <span className="logo-text">KaramTeam</span>
              <span className="logo-text-humanity">Humanity</span>
          </div>
        </div>
        {/* Menu Burger pour mobile */}
      <div className="burger-menu" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

        {/* Navigation Links */}
        <ul className={`nav-links desktop-menu ${isMobileMenuOpen ? "open" : ""}`}>
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
      {/* Menu Mobile uniquement visible sur mobile */}
{isMobileMenuOpen && (
  <div className="mobile-menu">
    {!activeSubMenu && (
      <ul className="main-menu">
        <li onClick={() => {router.push("/"); setMobileMenuOpen(false);}}>Accueil</li>
        <li onClick={() => setActiveSubMenu("projects")}>Nos Projets</li>
        <li onClick={() => setActiveSubMenu("collectes")}>Nos Collectes</li>
        <li onClick={() => {router.push("/about"); setMobileMenuOpen(false);}}>À Propos</li>
        <li onClick={() => setActiveSubMenu("contact")}>Contact</li>
        <li onClick={() => {router.push("/collectes"); setMobileMenuOpen(false);}} className="don-btn">Faire un Don</li>
      </ul>
    )}

    {activeSubMenu === "projects" && (
      <ul className="sub-menu">
        <li onClick={() => setActiveSubMenu(null)}>← Retour</li>
        <li onClick={() => {router.push("/projects/distribution"); setMobileMenuOpen(false);}}>Distribution</li>
        <li onClick={() => {router.push("/projects/education"); setMobileMenuOpen(false);}}>Éducation</li>
        <li onClick={() => {router.push("/projects/international"); setMobileMenuOpen(false);}}>International</li>
        <li onClick={() => {router.push("/projects/ramadan"); setMobileMenuOpen(false);}}>Ramadan</li>
      </ul>
    )}

    {activeSubMenu === "collectes" && (
      <ul className="sub-menu">
        <li onClick={() => setActiveSubMenu(null)}>← Retour</li>
        <li onClick={() => {router.push("/collectes/maraudes"); setMobileMenuOpen(false);}}>Maraudes</li>
        <li onClick={() => {router.push("/collectes/projets-en-cours"); setMobileMenuOpen(false);}}>Projets en cours</li>
      </ul>
    )}

    {activeSubMenu === "contact" && (
      <ul className="sub-menu">
        <li onClick={() => setActiveSubMenu(null)}>← Retour</li>
        <li onClick={() => {router.push("/contact"); setMobileMenuOpen(false);}}>Une question ?</li>
        <li onClick={() => {router.push("/contact/rejoindre"); setMobileMenuOpen(false);}}>Nous Rejoindre</li>
      </ul>
    )}
  </div>
)}

      </nav>
    )
}