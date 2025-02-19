import ProjectSection from "@/app/components/ProjectSection";

const otherProjects = [
    { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
    { name: "International", slug: "international", image: "/international.jpeg" },
    { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
    { name: "Aïd", slug: "aid", image: "/aid.jpeg" },
  ];
  
  export default function Distribution() {
    return (
      <ProjectSection
        title="Education"
        description="La distribution alimentaire et matérielle est un pilier essentiel de nos actions.
        Chaque jour, nous aidons des centaines de personnes en situation de précarité en leur fournissant
        des repas chauds, des vêtements et des produits de première nécessité."
        videoSrc="/education.mp4"
        otherProjects={otherProjects}
      />
    );
  }