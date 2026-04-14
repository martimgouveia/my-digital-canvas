import { Link } from "react-router-dom";
import Header from "@/components/Header";

const entries = [
  { id: "0003", to: "/antiglifo/0003" },
  { id: "0002", to: "/antiglifo/0002" },
  { id: "0001", to: "/antiglifo/0001" },
];

const Antiglifo = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto text-center">
        <h1 className="text-4xl font-normal text-foreground mb-5">
          antiglifo
        </h1>
        <h2 className="text-2xl italic text-foreground/80 mb-5">
          Analógico. Em fotografia e texto.
        </h2>
        <p className="text-base text-foreground leading-relaxed mb-10 max-w-[700px] mx-auto">
          antiglifo é um projeto que combina fotografia analógica com texto. Por enquanto
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-w-[1000px] mx-auto px-5">
          {entries.map((entry) => (
            <Link key={entry.id} to={entry.to} className="block overflow-hidden group">
              <div className="aspect-square bg-secondary flex items-center justify-center group-hover:opacity-70 transition-opacity">
                <span className="text-muted-foreground text-sm">{entry.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Antiglifo;
