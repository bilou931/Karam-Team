import styles from './mentions-legales.css';

export default function MentionsLegales() {
  return (
    <div className="container-mentions">
      <h1 className="title-mentions">Mentions Légales</h1>

      <section className='section-mentions'>
        <h2>1. Éditeur du site</h2>
        <p>
          <strong>Nom de l'association :</strong> Karam Team<br />
          <strong>Forme juridique :</strong> Association loi 1901<br />
          <strong>Adresse du siège social :</strong> [à compléter]<br />
          <strong>Email :</strong> karamteam.pro@gmail.com<br />
          <strong>Responsable de la publication :</strong> Bilel Barkallah<br />
          <strong>Numéro SIRET :</strong> 927 637 603 00014
        </p>
      </section>

      <section className='section-mentions'>
        <h2>2. Hébergeur du site</h2>
        <p>
          <strong>Vercel Inc.</strong><br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          <a className='text-mentions' href="https://vercel.com" target="_blank" rel="noopener noreferrer">
            https://vercel.com
          </a>
        </p>
      </section>

      <section className='section-mentions'>
        <h2>3. Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur le site karamteam.fr (textes, images, vidéos, logo...)
          sont la propriété exclusive de l'association Karam Team sauf mention contraire.
          Toute reproduction ou diffusion est interdite sans autorisation.
        </p>
      </section>

      <section className='section-mentions'>
        <h2>4. Données personnelles</h2>
        <p>
          Les données personnelles sont collectées uniquement via le formulaire de contact ou de don.
          Elles sont utilisées dans le strict cadre de la demande de l'utilisateur et ne sont jamais cédées à des tiers.
          Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression de vos données à l'adresse :
          <a className='text-mentions' href="mailto:karamteam.pro@gmail.com">karamteam.pro@gmail.com</a>.
        </p>
      </section>

      <section className='section-mentions'>
        <h2>5. Cookies</h2>
        <p>
          Ce site peut utiliser des cookies pour améliorer votre expérience de navigation.
          Vous pouvez les refuser ou les supprimer via les paramètres de votre navigateur.
        </p>
      </section>

      <section className='section-mentions'>
        <h2>6. Responsabilité</h2>
        <p>
          L’association Karam Team ne peut être tenue responsable des erreurs, omissions ou indisponibilités
          liées à l'affichage des informations présentes sur le site.
        </p>
      </section>
    </div>
  );
}
