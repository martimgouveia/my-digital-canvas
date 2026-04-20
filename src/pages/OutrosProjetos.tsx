import Header from "@/components/Header";
import { Link } from "react-router-dom";

interface Item {
  title: string;
  year: string;
  role: string;
  to: string;
}

const items: Item[] = [
  {
    title: "CONNECT FEST",
    year: "2024",
    role: "Fotografia de evento",
    to: "/outros-projetos/connect-fest",
  },
  // Vai acrescentando aqui à medida que quiseres adicionar mais projetos
  // Exemplos de funções: Ator, Produtor, Assistente de realização, etc.
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
          {items.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-12 gap-4 py-5 items-baseline"
            >
              <span className="col-span-2 text-sm text-muted-foreground tabular-nums">
                {item.year}
              </span>
              <Link
                to={item.to}
                className="col-span-7 text-base text-foreground hover:opacity-60 transition-opacity"
              >
                {item.title}
              </Link>
              <span className="col-span-3 text-sm text-muted-foreground italic">
                {item.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OutrosProjetos;
