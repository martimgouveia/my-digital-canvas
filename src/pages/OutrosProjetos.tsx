import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface Item {
  title: string;
  year: string;
  rolePt: string;
  roleEn: string;
  to?: string;
  href?: string;
  authorsPt?: string;
  authorsEn?: string;
  unreleased?: boolean;
}

const items: Item[] = [
  {
    title: "SEM PRESSÃO",
    year: "2026",
    rolePt: "Ator e Produção",
    roleEn: "Actor and Production",
    authorsPt: "de Manuel Grácio",
    authorsEn: "by Manuel Grácio",
    unreleased: true,
  },
  {
    title: "PARCEIROS INCOMPATÍVEIS",
    year: "2026",
    rolePt: "Produção",
    roleEn: "Production",
    authorsPt: "de Francisco Amaral",
    authorsEn: "by Francisco Amaral",
    unreleased: true,
  },
  {
    title: "WARM UP #02 CONNECT FEST",
    year: "2026",
    rolePt: "Gravação e edição de vídeo promocional",
    roleEn: "Filming and editing of promotional video",
    href: "https://www.instagram.com/reel/DUjL9sRiCjP/",
  },
  {
    title: "WARM UP #01 CONNECT FEST",
    year: "2025",
    rolePt: "Gravação de vídeo promocional",
    roleEn: "Filming of promotional video",
    href: "https://www.instagram.com/reel/DSKyqB-CMT8/",
  },
  {
    title: "FESTIVAL MIL",
    year: "2025",
    rolePt: "Voluntário Audiovisual — MIL Lisbon International Music Network. Filmagem de concertos e eventos ao vivo (vídeo em breve)",
    roleEn: "Audiovisual Volunteer — MIL Lisbon International Music Network. Filmed concerts and live events (video coming soon)",
  },
  {
    title: "CALDAS MIDNIGHT",
    year: "2025",
    rolePt: "Ator e Operador de Som",
    roleEn: "Actor and Sound Operator",
    authorsPt: "de Francisco Amaral e Manuel Grácio",
    authorsEn: "by Francisco Amaral and Manuel Grácio",
    href: "https://youtu.be/6Tp0wOSkmx8",
  },
  {
    title: "CONNECT FEST",
    year: "2024",
    rolePt: "Fotografia de evento",
    roleEn: "Event photography",
    to: "/outros-projetos/connect-fest",
  },
];

const OutrosProjetos = () => {
  const { t, localizePath, lang } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-12">
          {t("OUTROS PROJETOS", "OTHER PROJECTS")}
        </h1>
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          {t(
            "Trabalhos em que desempenhei diferentes funções em projetos de colegas e/ou festivais (ator, produção, fotografia de evento, audiovisual, entre outras). Clique nos títulos para aceder aos respetivos links.",
            "Projects in which I took on different roles in colleagues' work and/or festivals (actor, production, event photography, audiovisual, among others). Click the titles to open the respective links."
          )}
        </p>

        <ul className="divide-y divide-border">
          {items.map((item) => {
            const role = lang === "en" ? item.roleEn : item.rolePt;
            const authors = lang === "en" ? item.authorsEn : item.authorsPt;
            const titleNode = (
              <span className="text-base text-foreground hover:opacity-60 transition-opacity">
                {item.title}
                {item.unreleased && (
                  <span className="ml-2 text-xs text-muted-foreground italic">(unreleased)</span>
                )}
              </span>
            );

            const titleEl = item.to ? (
              <Link to={localizePath(item.to)}>{titleNode}</Link>
            ) : item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {titleNode}
              </a>
            ) : (
              titleNode
            );

            return (
              <li
                key={item.title}
                className="grid grid-cols-12 gap-4 py-5 items-baseline"
              >
                <span className="col-span-2 text-sm text-muted-foreground tabular-nums">
                  {item.year}
                </span>
                <div className="col-span-7">
                  {titleEl}
                  {authors && (
                    <p className="text-xs text-muted-foreground mt-1">{authors}</p>
                  )}
                </div>
                <span className="col-span-3 text-sm text-muted-foreground italic">
                  {role}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default OutrosProjetos;
