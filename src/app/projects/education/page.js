import ProjectSection from "@/app/components/ProjectSection";

const otherProjects = [
    { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
    { name: "International", slug: "international", image: "/international.jpeg" },
    { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
    // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
  ];
  
  export default function Distribution() {
    return (
      <ProjectSection
        title="Education"
        description="Karam Team s’engage également en faveur des orphelins et démunis au Maroc. Nous
croyons en l’éducation comme levier de transformation sociale et travaillons activement pour
offrir aux enfants les outils nécessaires à leur réussite scolaire.
<br/><br/>
Notre objectif principal est de soutenir ces enfants en leur fournissant des kits scolaires
complets. Nous voulons leur donner les meilleures chances de réussir leur parcours éducatif
et de construire un avenir meilleur.
<br/><br/>
Chaque année, nous organisons des campagnes de collecte afin de réaliser la distribution
de fournitures (cartables, cahiers, stylos, trousses, etc.) avant la rentrée.
<br/><br/>
En rejoignant ou en soutenant Karam Team, vous contribuez directement à offrir un avenir
meilleur à ces enfants. Chaque don, chaque action et chaque partage permet de faire la
différence !"
        videoSrc="/education.mp4"
        otherProjects={otherProjects}
      />
    );
  }