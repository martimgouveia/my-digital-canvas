import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import atemporal1 from "@/assets/fotografia/atemporal1.jpg";
import atemporal2 from "@/assets/fotografia/atemporal2.jpg";

const slides = [
  { image: atemporal1, caption: "Suspensas e pendentes, com pesos distintos, ainda permanecem algumas." },
  { image: atemporal2, caption: "Efetivamente, não é de ninguém. Eventualmente, já não sei." },
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
          <img src={slides[current].image} alt={`atemporal ${current + 1}`} className="w-full h-auto" />
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

        <section className="mt-16">
          <h2 className="text-xl font-normal text-foreground mb-6">Exposição</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">foto exposição 1</span>
            </div>
            <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">foto exposição 2</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Atemporal;
