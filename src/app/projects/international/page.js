import ProjectSectionWithExtra from "@/app/components/ProjectSectionWithExtra";
import Head from "next/head";

const otherProjects = [
  { name: "Education", slug: "education", image: "/education.jpeg" },
  { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
  { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
  // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
];

export default function International() {
  return (
    <>
      <Head>
        <title>Projet International | Karam Team</title>
        <meta
          name="description"
          content="Châteaux d’eau au Cambodge, arbres fruitiers au Burkina Faso : découvrez comment Karam Team agit à l’international pour un monde plus solidaire."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, international, château d’eau, Cambodge, Burkina Faso, arbre fruitier, manguiers, eau potable, Sadaqa Jariya, don, aumône"
        />
        <meta property="og:title" content="Projet International – Karam Team" />
        <meta
          property="og:description"
          content="Découvrez les projets internationaux de Karam Team : construction de châteaux d’eau, plantation d’arbres fruitiers, et actions humanitaires durables."
        />
        <meta property="og:image" content="/international.jpeg" />
        <meta
          property="og:url"
          content="https://karamteam.fr/projects/international"
        />
      </Head>
      <ProjectSectionWithExtra
        title="International"
        description="En 2023, Karam Team a mené un projet essentiel pour le bien-être des communautés
Cambodgiennes : la construction d’un château d’eau potable. Grâce au soutien d’une
association partenaire et à la générosité de nos donateurs, nous avons pu offrir un accès
durable à l’eau aux abords d’une école.
<br/><br/>
Le château d’eau est une structure adaptée aux zones rurales, où une forte population est
concentrée. Grâce à un forage réalisé en profondeur alimenté en électricité, le château d’eau
puise l’eau et le stock dans un réservoir ce qui permettra à des milliers de personnes d’avoir
plus facilement accès à l’eau potable.
<br/><br/>
L’eau est une ressource vitale, mais de nombreuses régions du monde souffrent encore d’un
accès limité à l’eau potable. Ce manque impacte directement la santé, l’éducation et les
conditions de vie des habitants, notamment des enfants.
<br/>
D'après 'Abdallah Ibn ‘Abbas, le Prophète (Paix sur lui) a dit : « La meilleure aumône est de
donner de l'eau à boire ».
En effet, lorsque l’on fait don d’un puits ou don d’un forage, on permet à tout une
communauté de s’hydrater, de se laver, de cuisiner et de cultiver, ainsi, on leur assure
sécurité, santé et prospérité."
        extraText="En 2024, Karam Team a franchi une nouvelle étape dans son engagement en faveur du
développement durable et de la solidarité en participant à un projet de plantation d’arbres
fruitiers (manguiers). Grâce au soutien précieux d’une autre association partenaire, nous
avons pu mettre en place cette initiative porteuse d’avenir, au bénéfice des communautés
locales du Burkina Faso.
<br/><br/>
Les arbres fruitiers sont une denrée rare et peuvent procurer des fruits à des familles
entières pendant plusieurs mois de l’année.
<br/>
Offrir un arbre, c’est une Sadaqa Jariya (aumône qui se renouvèle) pour les familles pauvres,
mais aussi un acte de bienfaisance envers la planète.
<br/><br/>
En plantant des arbres, vous ne serez que gagnants car le Prophète (Paix sur lui) a dit : «
Toutes les fois qu’un musulman plante un arbre et qu’un être humain, une bête ou un oiseau
en mangent, il se voit inscrire autant d’aumônes jusqu’au jour de la Résurrection ». [Muslim]"
        videoSrc="/videos/international.mp4"
        otherProjects={otherProjects}
      />
    </>
  );
}
