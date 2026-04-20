import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import samouco from "@/assets/fotografia/samouco.jpg";
import atemporal from "@/assets/fotografia/atemporal.jpg";

const projects = [
  { to: "/fotografia/samouco", title: "SAMOUCO - O FIM DO MUNDO", year: "2026", image: samouco },
  { to: "/fotografia/atemporal", title: "ATEMPORAL", year: "2025", image: atemporal },
];

const Fotografia = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Fotografia;
