import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import LightboxImage from "@/components/LightboxImage";
import atemporal1 from "@/assets/fotografia/atemporal1.jpg";
import atemporal2 from "@/assets/fotografia/atemporal2.jpg";
import atemporal3 from "@/assets/atemporal/atemporal3.jpg";
import atemporal4 from "@/assets/atemporal/atemporal4.jpg";
import atemporal5 from "@/assets/atemporal/atemporal5.jpg";
import atemporal6 from "@/assets/atemporal/atemporal6.jpg";

const slides = [
  { image: atemporal1, caption: "Suspensas e pendentes, com pesos distintos, ainda permanecem algumas." },
  { image: atemporal2, caption: "Efetivamente, não é de ninguém. Eventualmente, já não sei." },
  { image: atemporal3, caption: "Traços marcados, ignorados, despercebidos pelo movimento. Tal como nunca te cheguei a mostrar aquele texto." },
  { image: atemporal4, caption: "Era tão óbvio, que não era o mais claro." },
  { image: atemporal5, caption: "Tu não foste esquecido, só já não és lembrado." },
  { image: atemporal6, caption: "É indelével entender que já não é o mesmo chão. Mas, será sempre o mesmo solo." },
  { image: null, caption: "Alteradas ficam as folhas pelo vento, mas quieto fica o penumbroso cerne da beleza." },
  { image: null, caption: "Ficas à espera para ver se tens o mesmo volume. És fera!" },
  { image: null, caption: "Talvez assim, o sol não veja a minha elegância." },
  { image: null, caption: "O deparo que a transparência criou, num instante esbateu-se." },
  { image: null, caption: "Entretanto, a culpa casou-se." },
];

const Atemporal = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-4 text-left">Atemporal</h1>
        <p className="text-sm leading-relaxed text-muted-foreground mb-12 text-left">
          "Atemporal" é uma instalação fotográfica que pretende gerar uma interação única entre os visitantes que imergem neste espaço escuro e os objetos estáticos que o habitam, mas que não ficam suspensos pelo peso do tempo, desafiando a sua perceção. Este conjunto de 11 fotografias revela mais do que aquilo que está visível à primeira vista. As frases manuscritas acrescentam múltiplas camadas de interpretação e podem gerar mais dúvidas, uma vez que só se tornam visíveis sob esta singular luz. Esta luz simboliza o que frequentemente procuramos, mas raramente descobrimos, e quando finalmente, ou por acaso, a encontramos, a sua aceitação pode ser um desafio. Paradoxalmente, a impossibilidade de a encontrar pode tornar-se o nosso maior desejo.
        </p>

        <div className="relative">
          {slide.image ? (
            <LightboxImage
              src={slide.image}
              alt={`atemporal ${current + 1}`}
              className="w-full h-auto"
              caption={slide.caption}
            />
          ) : (
            <div className="w-full aspect-[3/2] bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">foto {current + 1}</span>
            </div>
          )}
          <p className="text-left text-sm text-muted-foreground mt-4 italic">
            {slide.caption}
          </p>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors duration-300">
            <ChevronLeft size={32} />
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors duration-300">
            <ChevronRight size={32} />
          </button>
        </div>

        <section className="mt-16">
          <h2 className="text-xl font-normal text-foreground mb-4 text-left">Exposição na Blackbox da ESAD.CR — 16 de junho de 2025</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-left">
            A 16 de junho de 2025, este projeto foi avaliado e apresentado numa das salas escuras denominadas Blackbox na ESAD.CR. Os meus colegas e outros visitantes puderam ver em prática o efeito refletido pela luz ultravioleta nas fotografias e a aplicação da tinta ultravioleta nas próprias fotografias.
          </p>
        </section>
      </div>
    </>
  );
};

export default Atemporal;
