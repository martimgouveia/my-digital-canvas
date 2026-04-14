import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { to: "#", title: "Flores", year: "2026" },
  { to: "#", title: "KAEL (unreleased)", year: "2026" },
  { to: "#", title: "mind the gap", year: "2025" },
  { to: "#", title: "Até a Maré Subir (unreleased)", year: "2025" },
  { to: "/filme/ilha", title: "ilha", year: "2024" },
];

const Filme = () => {
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

export default Filme;
