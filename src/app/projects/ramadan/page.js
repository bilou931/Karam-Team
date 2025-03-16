import AidProjectSection from "@/app/components/AidProjectSection";
import RamadanProjectSection from "@/app/components/RamadanProjectSection";

const otherProjects = [
    { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
    { name: "International", slug: "international", image: "/international.jpeg" },
    { name: "Education", slug: "education", image: "/education.jpeg" },
    // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
  ];
  
  export default function Distribution() {
    return (
      <>
      <RamadanProjectSection
        title="Ramadan"
        description="Karam Team s’engage durant la période de Ramadan à travers ses maraudes solidaires à
fournir de la chaleur et du réconfort.
<br/>
Les distributions toutes les semaines, permettent de fournir des repas chauds et des produits
de première nécessité. Nous veillons également à fournir des vêtements adaptés aux
différentes saisons.
<br/><br/>
Dans la mesure du possible nos bénévoles qualifiés prodiguent des premiers soins et
peuvent réaliser des pansements aux personnes superficiellement blessées.
Au-delà de l’aide matérielle, les maraudes de Karam Team sont un moment de partage et
d’écoute. C’est l’occasion d’échanger avec les bénéficiaires mais également entre
bénévoles. Chaque action est guidée par des valeurs de solidarité, de bienveillance mais
avant tout de respect.
<br/><br/>
Tu souhaites faires des dons matériels : denrées alimentaires, vêtements, produits
d’hygiène, produits de premiers soins…
N’hésite pas à nous contacter, Karam Team réalise des collectes tout au long de ce mois.
<br/><br/>
Alors, es-tu prêt à nous rejoindre ?
<br/>
Chaque aide compte et peut faire une réelle différence. Un don, un peu de temps ou un
simple geste de partage !
On ne peut pas aider tout le monde mais on peut tous aider quelqu’un."
        // videoSrc="/ramadan.mp4"
      />
      <AidProjectSection title="Aïd" otherProjects={otherProjects}/>
      </>
    );
  }