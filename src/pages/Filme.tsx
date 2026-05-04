import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import flores from "@/assets/filme/flores.jpg";
import mindthegap from "@/assets/filme/mindthegapcover.png";
import ateamaresubir from "@/assets/filme/ateamaresubir.jpg";
import ilha from "@/assets/filme/ilhacover.png";
import kael from "@/assets/filme/kael.png";

const Filme = () => {
  const { t } = useLanguage();
  const projects = [
    // { to: "/filme/flores", title: "Flores", year: "2026", image: flores }, // oculto até ter os frames
    { to: "/filme/kael", title: t("KAEL (unreleased)", "KAEL (unreleased)"), year: "2026", image: kael },
    { to: "/filme/mind-the-gap", title: "mind the gap", year: "2025", image: mindthegap },
    // { to: "/filme/ate-a-mare-subir", title: t("Até a Maré Subir (unreleased)", "Até a Maré Subir (unreleased)"), year: "2025", image: ateamaresubir }, // oculto até ter os frames
    { to: "/filme/ilha", title: "ilha", year: "2024", image: ilha },
  ];
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
