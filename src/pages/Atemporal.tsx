import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";

const slides = [
  { caption: "Suspensas e pendentes, com pesos distintos, ainda permanecem algumas." },
  { caption: "Efetivamente, não é de ninguém. Eventualmente, já não sei." },
  { caption: "Frase da imagem 3" },
];

const Atemporal = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-4">Atemporal</h1>
        <p className="text-sm leading-relaxed text-muted-foreground mb-12 max-w-2xl">
          "Atemporal" é uma instalação fotográfica que pretende gerar uma interação única entre os visitantes que imergem neste espaço escuro e os objetos estáticos que o habitam, mas que não ficam suspensos pelo peso do tempo, desafiando a sua perceção. Este conjunto de 11 fotografias revela mais do que aquilo que está visível à primeira vista. As frases manuscritas acrescentam múltiplas camadas de interpretação e podem gerar mais dúvidas, uma vez que só se tornam visíveis sob esta singular luz. Esta luz simboliza o que frequentemente procuramos, mas raramente descobrimos, e quando finalmente, ou por acaso, a encontramos, a sua aceitação pode ser um desafio. Paradoxalmente, a impossibilidade de a encontrar pode tornar-se o nosso maior desejo.
        </p>

        <div className="relative">
          <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
            <span className="text-muted-foreground text-sm">atemporal{current + 1}.jpg</span>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 italic">
            {slides[current].caption}
          </p>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors">
            <ChevronLeft size={32} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Atemporal;
