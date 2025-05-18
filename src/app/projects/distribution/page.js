import ProjectSection from "@/app/components/ProjectSection";
import Head from "next/head";

const otherProjects = [
  { name: "Éducation", slug: "education", image: "/education.jpeg" },
  {
    name: "International",
    slug: "international",
    image: "/international.jpeg",
  },
  { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
  // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
];
const description = "";

export default function Distribution() {
  return (
    <>
      <Head>
        <title>Maraudes solidaires – Projet Distribution | Karam Team</title>
        <meta
          name="description"
          content="Karam Team organise des maraudes solidaires mensuelles pour distribuer repas, vêtements et soins aux plus démunis. Rejoignez-nous ou soutenez-nous par un don."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Karam Team, maraudes, distribution, repas chauds, solidarité, sans-abri, bénévolat, don"
        />
        <meta property="og:title" content="Projet Distribution – Karam Team" />
        <meta
          property="og:description"
          content="Nos maraudes mensuelles apportent chaleur, réconfort et produits de première nécessité aux personnes dans le besoin."
        />
        <meta property="og:image" content="/distribution.jpeg" />
        <meta
          property="og:url"
          content="https://karamteam.fr/projects/distribution"
        />
      </Head>
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
        videoSrc="/distribution1.mp4"
        otherProjects={otherProjects}
      />
    </>
  );
}
