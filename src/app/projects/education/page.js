import ProjectSection from "@/app/components/ProjectSection";
import Head from "next/head";

const otherProjects = [
  { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
  {
    name: "International",
    slug: "international",
    image: "/international.jpeg",
  },
  { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
  // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
];

export default function Distribution() {
  return (
    <>
      <Head>
        <title>Projet Éducation | Karam Team</title>
        <meta
          name="description"
          content="Karam Team soutient l'éducation des orphelins et enfants démunis au Maroc à travers des campagnes de collecte de fournitures scolaires."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, éducation, kits scolaires, orphelins, enfants démunis, Maroc, fournitures scolaires, solidarité, don"
        />
        <meta property="og:title" content="Projet Éducation – Karam Team" />
        <meta
          property="og:description"
          content="Nous croyons en l'éducation comme levier de transformation sociale. Rejoignez Karam Team pour offrir un avenir meilleur aux enfants démunis."
        />
        <meta property="og:image" content="/education.jpeg" />
        <meta
          property="og:url"
          content="https://karamteam.fr/projects/education"
        />
      </Head>
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
    </>
  );
}
