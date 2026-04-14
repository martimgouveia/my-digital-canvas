import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { to: "#", title: "SAMOUCO - O FIM DO MUNDO", year: "2026" },
  { to: "/fotografia/atemporal", title: "ATEMPORAL", year: "2025" },
  { to: "#", title: "CONNECT FEST 28/11/2024", year: "2024" },
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
