import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSnapchatGhost } from "react-icons/fa";
import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Première section verte claire */}
      {/* <div className="footer-top">
        <p className="footer-message">On peut tous aider quelqu'un</p>
        <div className="footer-logo">
          <Image src="/karam_team_logo (1).png" alt="Karam Team Logo" width={80} height={80} />
          <h2>Karam Team</h2>
        </div>
        <div className="footer-socials">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>
      </div> */}

      {/* Deuxième section verte foncée */}
      <div className="footer-bottom">
        <div className="div-left">
          <div className="footer-logo">
              <Image src="/karam_team_logo1.png" alt="Karam Team Logo" width={80} height={80} />
              <h2>Karam Team</h2>
          </div>
          <div className="footer-socials">
      <a
        href="https://www.instagram.com/karam.team/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-item"
      >
        <FaInstagram className="social-icon" />
        <span className="social-text">karam.team</span>
      </a>

      {/* <a
        href="https://twitter.com/karamteam"
        target="_blank"
        rel="noopener noreferrer"
        className="social-item"
      >
        <FaTwitter className="social-icon" />
        <span className="social-text">@karamteam</span>
      </a> */}
      <a
        href="https://www.snapchat.com/add/karam.team"
        target="_blank"
        rel="noopener noreferrer"
        className="social-item"
      >
        <FaSnapchatGhost className="social-icon" />
        <span className="social-text">karam.team</span>
      </a>
      <a
          href="https://linktr.ee/karamteam"
          target="_blank"
          rel="noopener noreferrer"
          className="social-item-linktree"
        >
          <img src="/logo_linktree.webp" alt="Linktree" className="social-icon-linktree" />
          <span className="social-text">Linktree</span>
      </a>
    </div>
          </div>
        <div className="footer-column">
          <h3>À propos</h3>
          <ul>
            <li>Informations légales</li>
            {/* <li>Adresse : 12 rue de la solidarité, Paris</li> */}
            <li>IBAN : FR76 1695 8000 0199 4230 2190 077</li>
            {/* <li>Téléphone : +33 1 23 45 67 89</li> */}
            <li>SIRET : 927 637 603 00014</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Besoins d'aide ?</h3>
          <ul>
            {/* <li>FAQ</li> */}
            <li>
            <Link href="/contact">Nous contacter</Link>
              </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Nous soutenir</h3>
          <ul>
            <li>Faire un don libre</li>
            <li>Participer à un projet</li>
            <li>Devenir membre</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
