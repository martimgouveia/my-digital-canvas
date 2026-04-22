import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import LightboxImage, { LightboxGallery } from "@/components/LightboxImage";
import { useLanguage } from "@/contexts/LanguageContext";
import blackbox1 from "@/assets/atemporal/blackbox1.jpg";
import blackbox2 from "@/assets/atemporal/blackbox2.jpg";
import blackbox3 from "@/assets/atemporal/blackbox3.jpg";
import atemporal1 from "@/assets/fotografia/atemporal1.jpg";
import atemporal2 from "@/assets/fotografia/atemporal2.jpg";
import atemporal3 from "@/assets/atemporal/atemporal3.jpg";
import atemporal4 from "@/assets/atemporal/atemporal4.jpg";
import atemporal5 from "@/assets/atemporal/atemporal5.jpg";
import atemporal6 from "@/assets/atemporal/atemporal6.jpg";
import atemporal7 from "@/assets/atemporal/atemporal7.jpg";
import atemporal8 from "@/assets/atemporal/atemporal8.jpg";
import atemporal9 from "@/assets/atemporal/atemporal9.jpg";
import atemporal10 from "@/assets/atemporal/atemporal10.jpg";
import atemporal11 from "@/assets/atemporal/atemporal11.jpg";

const slides = [
  { image: atemporal1, caption: "Suspensas e pendentes, com pesos distintos, ainda permanecem algumas." },
  { image: atemporal2, caption: "Efetivamente, não é de ninguém. Eventualmente, já não sei." },
  { image: atemporal3, caption: "Traços marcados, ignorados, despercebidos pelo movimento. Tal como nunca te cheguei a mostrar aquele texto." },
  { image: atemporal4, caption: "Era tão óbvio, que não era o mais claro." },
  { image: atemporal5, caption: "Tu não foste esquecido, só já não és lembrado." },
  { image: atemporal6, caption: "É indelével entender que já não é o mesmo chão. Mas, será sempre o mesmo solo." },
  { image: atemporal7, caption: "Alteradas ficam as folhas pelo vento, mas quieto fica o penumbroso cerne da beleza." },
  { image: atemporal8, caption: "Ficas à espera para ver se tens o mesmo volume. És fera!" },
  { image: atemporal9, caption: "Talvez assim, o sol não veja a minha elegância." },
  { image: atemporal10, caption: "O deparo que a transparência criou, num instante esbateu-se." },
  { image: atemporal11, caption: "Entretanto, a culpa casou-se." },
];

const blackboxImages = [blackbox1, blackbox2, blackbox3];

const BlackboxCarousel = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? blackboxImages.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === blackboxImages.length - 1 ? 0 : i + 1));
  return (
    <LightboxGallery>
      <div className="relative">
        <LightboxImage
          src={blackboxImages[idx]}
          alt={`Blackbox ESAD.CR ${idx + 1}`}
          className="w-full h-auto"
        />
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors duration-300">
          <ChevronLeft size={32} />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors duration-300">
          <ChevronRight size={32} />
        </button>
      </div>
      <div className="hidden">
        {blackboxImages.map((src, i) => (
          <LightboxImage key={i} src={src} alt={`Blackbox ESAD.CR ${i + 1}`} />
        ))}
      </div>
    </LightboxGallery>
  );
};

const Atemporal = () => {
  const { t, lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-4">Atemporal</h1>
        <p className="text-sm leading-relaxed text-muted-foreground mb-4">
          {t(
            "\"Atemporal\" é uma instalação fotográfica que pretende gerar uma interação única entre os visitantes que imergem neste espaço escuro e os objetos estáticos que o habitam, mas que não ficam suspensos pelo peso do tempo, desafiando a sua perceção. Este conjunto de 11 fotografias revela mais do que aquilo que está visível à primeira vista. As frases manuscritas acrescentam múltiplas camadas de interpretação e podem gerar mais dúvidas, uma vez que só se tornam visíveis sob esta singular luz. Esta luz simboliza o que frequentemente procuramos, mas raramente descobrimos, e quando finalmente, ou por acaso, a encontramos, a sua aceitação pode ser um desafio. Paradoxalmente, a impossibilidade de a encontrar pode tornar-se o nosso maior desejo.",
            "\"Atemporal\" is a photographic installation that aims to generate a unique interaction between visitors who immerse themselves in this dark space and the static objects that inhabit it — objects that are not suspended by the weight of time, but rather challenge our perception of it. This set of 11 photographs reveals more than what is visible at first glance. The handwritten sentences add multiple layers of interpretation and may raise more questions, since they only become visible under this singular light. This light symbolises what we often seek but rarely find, and when we finally — or by chance — find it, accepting it can be a challenge. Paradoxically, the impossibility of finding it may become our greatest desire."
          )}
        </p>
        {lang === "en" && (
          <p className="text-xs text-muted-foreground/70 italic mb-12">
            Note: the handwritten captions on each photograph remain in their original Portuguese.
          </p>
        )}
        {lang === "pt" && <div className="mb-8" />}

        <LightboxGallery>
          <div className="relative">
            <LightboxImage
              src={slide.image}
              alt={`atemporal ${current + 1}`}
              className="w-full h-auto"
              caption={slide.caption}
            />
            <p className="text-sm text-muted-foreground mt-4 italic">
              {slide.caption}
            </p>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors duration-300">
              <ChevronLeft size={32} />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors duration-300">
              <ChevronRight size={32} />
            </button>
          </div>
          {/* Hidden registrations so all 11 slides are part of the fullscreen gallery */}
          <div className="hidden">
            {slides.map((s, i) => (
              <LightboxImage key={i} src={s.image} alt={`atemporal ${i + 1}`} caption={s.caption} />
            ))}
          </div>
        </LightboxGallery>

        <section className="mt-16">
          <h2 className="text-xl font-normal text-foreground mb-4">{t("Ficha técnica", "Credits")}</h2>
          <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
            <div>
              <dt className="inline font-medium text-foreground">{t("Autoria (fotografia e texto)", "Author (photography and text)")}: </dt>
              <dd className="inline">Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Caligrafia", "Calligraphy")}: </dt>
              <dd className="inline">Luís Freitas</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Música", "Music")}: </dt>
              <dd className="inline">{t(
                "\"Atemporal\" de Martim Gouveia (a partir de um sample de \"De Volta ao Espelho\" de Rádio Macau)",
                "\"Atemporal\" by Martim Gouveia (based on a sample of \"De Volta ao Espelho\" by Rádio Macau)"
              )}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Apoio logístico", "Logistical support")}: </dt>
              <dd className="inline">Leonor Serra {t("e", "and")} Rita Dias</dd>
            </div>
          </dl>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-normal text-foreground mb-4">
            {t(
              "Exposição na Blackbox da ESAD.CR — 16 de junho de 2025",
              "Exhibition at the ESAD.CR Blackbox — 16 June 2025"
            )}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {t(
              "A 16 de junho de 2025, este projeto foi avaliado e apresentado numa das salas escuras denominadas Blackbox na ESAD.CR. Os meus colegas e outros visitantes puderam ver em prática o efeito refletido pela luz ultravioleta nas fotografias e a aplicação da tinta ultravioleta nas próprias fotografias.",
              "On 16 June 2025, this project was assessed and presented in one of the dark rooms known as Blackbox at ESAD.CR. My colleagues and other visitors were able to experience the effect reflected by the ultraviolet light on the photographs and the application of ultraviolet ink on the photographs themselves."
            )}
          </p>
          <BlackboxCarousel />
        </section>
      </div>
    </>
  );
};

export default Atemporal;
