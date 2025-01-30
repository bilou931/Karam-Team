import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      {/* Première section verte claire */}
      <div className="footer-top">
        <p className="footer-message">On peut tous aider quelqu'un</p>
        <div className="footer-logo">
          <Image src="/logo.png" alt="Karam Team Logo" width={80} height={80} />
          <h2>Karam Team</h2>
        </div>
        <div className="footer-socials">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaLinkedin className="social-icon" />
        </div>
      </div>

      {/* Deuxième section verte foncée */}
      <div className="footer-bottom">
        <div className="footer-column">
          <h3>À propos</h3>
          <ul>
            <li>Informations légales</li>
            <li>Adresse : 12 rue de la solidarité, Paris</li>
            <li>IBAN : FR76 1234 5678 9101</li>
            <li>Téléphone : +33 1 23 45 67 89</li>
            <li>SIRET : 123 456 789 00010</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Besoins d'aide ?</h3>
          <ul>
            <li>FAQ</li>
            <li>Nous contacter</li>
            <li>Assistance bénévole</li>
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
