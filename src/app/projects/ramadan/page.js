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
        description="La distribution alimentaire et matérielle est un pilier essentiel de nos actions.
        Chaque jour, nous aidons des centaines de personnes en situation de précarité en leur fournissant
        des repas chauds, des vêtements et des produits de première nécessité."
        // videoSrc="/ramadan.mp4"
      />
      <AidProjectSection title="Aïd" otherProjects={otherProjects}/>
      </>
    );
  }