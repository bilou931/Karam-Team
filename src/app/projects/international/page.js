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
        description="Nos actions s'étendent au-delà des frontières. Nous travaillons avec des
        partenaires locaux pour fournir un soutien humanitaire dans différentes régions du monde."
        extraText="Nos projets internationaux incluent la construction d'écoles, l'accès à l'eau potable
        et le soutien aux communautés vulnérables."
        videoSrc="/videos/international.mp4"
        otherProjects={otherProjects}
      />
    );
  }