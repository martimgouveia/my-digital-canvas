import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import img0001 from "@/assets/antiglifo/0001.JPG";
import img0002 from "@/assets/antiglifo/0002.JPG";
import img0003 from "@/assets/antiglifo/0003.JPG";

const entries = [
  { id: "0003", to: "/antiglifo/0003", image: img0003 },
  { id: "0002", to: "/antiglifo/0002", image: img0002 },
  { id: "0001", to: "/antiglifo/0001", image: img0001 },
];

const Antiglifo = () => {
  const { t, localizePath } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <h1 className="text-4xl font-normal text-foreground mb-5">
          antiglifo
        </h1>
        <h2 className="text-2xl italic text-foreground/80 mb-5">
          {t("Analógico. Em fotografia e texto.", "Analogue. In photography and text.")}
        </h2>
        <p className="text-base text-foreground leading-relaxed mb-10">
          {t(
            "Publicado pela primeira vez em outubro de 2025, antiglifo é um projeto que combina fotografia analógica com texto como forma de observar o tempo, a memória e a experiência humana sem a necessidade de os fixar num significado único. Partindo de imagens captadas em momentos quotidianos, o projeto constrói-se através de textos que não explicam as fotografias, mas coexistem com elas. Entre ambos, cria-se um espaço de tensão: entre o que é visto e o que é sentido, entre o que aconteceu e aquilo que é reconstruído. O antiglifo surge como um gesto contrário à inscrição definitiva: não procura marcar um significado, mas questionar a sua estabilidade. Cada publicação funciona como um fragmento autónomo, que simultaneamente se relaciona com os outros, formando uma espécie de arquivo emocional onde o tempo não é linear, mas vivido, revisto e reinterpretado. Mais do que documentar, o projeto propõe uma experiência: a de parar, observar e habitar o instante, mesmo quando este escapa. Daí estar publicado, atualmente e somente, numa página no Instagram, opondo-se a esta plataforma que serve-nos com uma grande variedade de conteúdos e de consumo rápido.",
            "First published in October 2025, antiglifo is a project that combines analogue photography with text as a way of observing time, memory and human experience without the need to fix them into a single meaning. Starting from images captured in everyday moments, the project is built through texts that do not explain the photographs, but coexist with them. Between the two, a space of tension emerges: between what is seen and what is felt, between what happened and what is reconstructed. Antiglifo arises as a gesture opposed to definitive inscription: it does not seek to mark a meaning, but to question its stability. Each post works as an autonomous fragment that simultaneously relates to the others, forming a kind of emotional archive where time is not linear, but lived, revisited and reinterpreted. More than documenting, the project proposes an experience: that of pausing, observing and inhabiting the instant, even when it escapes. That is why it is published, for now and exclusively, on an Instagram page, opposing this platform that serves us with a wide variety of fast-consumption content."
          )}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {entries.map((entry) => (
            <Link key={entry.id} to={localizePath(entry.to)} className="block group">
              <div className="overflow-hidden relative">
                <img
                  src={entry.image}
                  alt={entry.id}
                  className="w-full h-auto object-contain group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-foreground text-sm">{entry.id}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Antiglifo;
