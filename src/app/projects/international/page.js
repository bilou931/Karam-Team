import ProjectSectionWithExtra from "@/app/components/ProjectSectionWithExtra";

const otherProjects = [
    { name: "Education", slug: "education", image: "/education.jpeg" },
    { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
    { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
    // { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
  ];
  
  export default function International() {
    return (
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
        extraText="Nos projets internationaux incluent la construction d'écoles, l'accès à l'eau potable
        et le soutien aux communautés vulnérables."
        videoSrc="/videos/international.mp4"
        otherProjects={otherProjects}
      />
    );
  }