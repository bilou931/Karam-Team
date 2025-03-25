// "use client";

// import { useRouter } from "next/navigation";
// import "./distribution.css";

// const projets = [
//   { name: "Éducation", slug: "education", image: "/images/education.jpg" },
//   { name: "International", slug: "international", image: "/images/international.jpg" },
//   { name: "Ramadan", slug: "ramadan", image: "/images/ramadan.jpg" },
//   { name: "Aïd", slug: "aid", image: "/images/aid.jpg" },
// ];

// export default function Distribution() {
//   const router = useRouter();

//   return (
//     <div className="project-detail-container">
//       {/* Section principale */}
//       <div className="project-content">
//         {/* Texte à gauche */}
//         <div className="project-text">
//           <h1 className="project-title">Distribution</h1>
//           <p className="project-description">
//             La distribution alimentaire et matérielle est un pilier essentiel de nos actions.
//             Chaque jour, nous aidons des centaines de personnes en situation de précarité en
//             leur fournissant des repas chauds, des vêtements et des produits de première nécessité.
//             Grâce à votre soutien, nous pouvons continuer à agir et faire une réelle différence.
//           </p>
//         </div>

//         {/* Vidéo à droite */}
//         <div className="project-video">
//           <video autoPlay loop muted className="distribution-video">
//             <source src="/videos/distribution.mp4" type="video/mp4" />
//             Votre navigateur ne supporte pas la lecture de vidéos.
//           </video>
//         </div>
//       </div>

//       {/* Navigation vers les autres projets */}
//       <h2 className="related-title">Découvrez nos autres projets</h2>
//       <div className="related-projects">
//         {projets.map((projet) => (
//           <div
//             key={projet.slug}
//             className="project-card"
//             onClick={() => router.push(`/projects/${projet.slug}`)}
//           >
//             <img src={projet.image} alt={projet.name} className="project-image" />
//             <div className="project-overlay">
//               <span className="project-text">{projet.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import ProjectSection from "@/app/components/ProjectSection";
import { Link } from "lucide-react";

const otherProjects = [
    { name: "Éducation", slug: "education", image: "/education.jpeg" },
    { name: "International", slug: "international", image: "/international.jpeg" },
    { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
    // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
  ];
  const description = ""
  
  export default function Distribution() {
    return (
      <ProjectSection
        title="Distribution"
        description="Karam Team s’engage a travers ses maraudes solidaires mensuelles à fournir de la chaleur
et du réconfort. <br/><br/>

Les distributions permettent de fournir des repas chauds et des produits de première
nécessité. Nous veillons également à fournir des vêtements adaptés aux différentes saisons.

Dans la mesure du possible nos bénévoles qualifiés prodiguent des premiers soins et
peuvent réaliser des pansements aux personnes superficiellement blessées.
<br/><br/>
Au-delà de l’aide matérielle, les maraudes de Karam Team sont un moment de partage et
d’écoute. C’est l’occasion d’échanger avec les bénéficiaires mais également entre
bénévoles. Chaque action est guidée par des valeurs de solidarité, de bienveillance mais
avant tout de respect.
<br/><br/>
Alors, es-tu prêt à nous rejoindre ?<br/>
Chaque aide compte et peut faire une réelle différence. Un don, un peu de temps ou un
simple geste de partage !
<br/>
On ne peut pas aider tout le monde mais on peut tous aider quelqu’un."
        videoSrc="/distribution.mp4"
        otherProjects={otherProjects}
      />
    );
  }