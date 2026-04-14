import { Link } from "react-router-dom";
import Header from "@/components/Header";

const entries = [
  { id: "0003", to: "#" },
  { id: "0002", to: "#" },
  { id: "0001", to: "/antiglifo/0001" },
];

const Antiglifo = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-light tracking-widest text-foreground mb-4">
          antiglifo
        </h1>
        <h2 className="text-lg italic text-muted-foreground mb-4">
          Analógico. Em fotografia e texto.
        </h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-xl">
          antiglifo é um projeto que combina fotografia analógica com texto. Por enquanto
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <Link key={entry.id} to={entry.to} className="block aspect-square overflow-hidden bg-secondary group">
              <div className="w-full h-full flex items-center justify-center bg-secondary group-hover:bg-muted transition-colors">
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
