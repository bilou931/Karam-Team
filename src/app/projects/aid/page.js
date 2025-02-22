import AidProjectSection from "@/app/components/AidProjectSection";

const otherProjects = [
    { name: "Distribution", slug: "distribution", image: "/distribution.jpeg" },
    { name: "International", slug: "international", image: "/international.jpeg" },
    { name: "Education", slug: "education", image: "/education.jpeg" },
    { name: "Ramadan", slug: "ramadan", image: "/ramadan.jpeg" },
  ];
  
  export default function Distribution() {
    return (
      <AidProjectSection
        title="Aïd"
        // description="La distribution alimentaire et matérielle est un pilier essentiel de nos actions.
        // Chaque jour, nous aidons des centaines de personnes en situation de précarité en leur fournissant
        // des repas chauds, des vêtements et des produits de première nécessité."
        // videoSrc="/aid.mp4"
        otherProjects={otherProjects}
      />
    );
  }