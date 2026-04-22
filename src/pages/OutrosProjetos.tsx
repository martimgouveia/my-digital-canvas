import Header from "@/components/Header";
import { Link } from "react-router-dom";

interface Item {
  title: string;
  year: string;
  role: string;
  to?: string;
  href?: string;
  authors?: string;
  unreleased?: boolean;
}

const items: Item[] = [
  {
    title: "WARM UP #02 CONNECT FEST",
    year: "2026",
    role: "Gravação e edição de vídeo promocional",
    href: "https://www.instagram.com/reel/DUjL9sRiCjP/",
  },
  {
    title: "SEM PRESSÃO",
    year: "2026",
    role: "Ator e Produção",
    authors: "de Manuel Grácio",
    unreleased: true,
  },
  {
    title: "PARCEIROS INCOMPATÍVEIS",
    year: "2026",
    role: "Produção",
    authors: "de Francisco Amaral",
    unreleased: true,
  },
  {
    title: "CALDAS MIDNIGHT",
    year: "2025",
    role: "Ator e Operador de Som",
    authors: "de Francisco Amaral e Manuel Grácio",
    href: "https://youtu.be/6Tp0wOSkmx8",
  },
  {
    title: "WARM UP #01 CONNECT FEST",
    year: "2025",
    role: "Gravação de vídeo promocional",
    href: "https://www.instagram.com/reel/DSKyqB-CMT8/",
  },
  {
    title: "CONNECT FEST",
    year: "2024",
    role: "Fotografia de evento",
    to: "/outros-projetos/connect-fest",
  },
];

const OutrosProjetos = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-12">
          OUTROS PROJETOS
        </h1>
        <p className="text-sm text-muted-foreground mb-10 max-w-2xl">
          Trabalhos em que participei como colaborador, contratado ou convidado —
          em diferentes funções (ator, produtor, fotografia de evento, entre outras).
        </p>

        <ul className="divide-y divide-border">
          {items.map((item) => {
            const titleNode = (
              <span className="text-base text-foreground hover:opacity-60 transition-opacity">
                {item.title}
                {item.unreleased && (
                  <span className="ml-2 text-xs text-muted-foreground italic">(unreleased)</span>
                )}
              </span>
            );

            const titleEl = item.to ? (
              <Link to={item.to}>{titleNode}</Link>
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
                  {item.authors && (
                    <p className="text-xs text-muted-foreground mt-1">{item.authors}</p>
                  )}
                </div>
                <span className="col-span-3 text-sm text-muted-foreground italic">
                  {item.role}
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
