import Header from "@/components/Header";
import LightboxImage, { LightboxGallery } from "@/components/LightboxImage";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import frame1 from "@/assets/kael/frame1.png";
import frame2 from "@/assets/kael/frame2.png";
import frame3 from "@/assets/kael/frame3.png";
import frame4 from "@/assets/kael/frame4.png";
import frame5 from "@/assets/kael/frame5.png";
import frame6 from "@/assets/kael/frame6.png";
import frame7 from "@/assets/kael/frame7.png";

const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

const Kael = () => {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-2">KAEL</h1>
        <p className="text-sm text-muted-foreground italic mb-8">unreleased</p>

        <section className="mb-12">
          <LightboxGallery>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {frames.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="aspect-video overflow-hidden bg-muted">
                      <LightboxImage
                        src={img}
                        alt={`KAEL — frame ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </LightboxGallery>
        </section>

        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          {t(
            "2071, a inteligência artificial toma conta e, após fugir de um campo de concentração, Kael encontra refúgio num complexo abandonado gerido por MIRA, uma antiga inteligência artificial criada para cuidar de um idoso já falecido. Entre desconfiança e necessidade, Kael é forçado a conviver com a máquina, descobrindo nela uma inesperada humanidade.",
            "2071, artificial intelligence has taken over and, after escaping from a concentration camp, Kael finds refuge in an abandoned complex run by MIRA, an old artificial intelligence created to care for an elderly man now deceased. Between distrust and necessity, Kael is forced to coexist with the machine, discovering in it an unexpected humanity."
          )}
        </p>

        <p className="text-sm leading-relaxed text-muted-foreground mb-12">
          {t("Filme de Manuel Grácio e Martim Gouveia.", "A film by Manuel Grácio and Martim Gouveia.")}
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-normal text-foreground mb-4">{t("Ficha técnica", "Credits")}</h2>
          <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
            <div>
              <dt className="inline font-medium text-foreground">{t("Realização", "Director")}: </dt>
              <dd className="inline">Manuel Grácio</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Produção", "Production")}: </dt>
              <dd className="inline">Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Elenco", "Cast")}: </dt>
              <dd className="inline">{t(
                "Pedro Marujo, Maria Grácio, \"Inês\" (voz gerada pelo site Narakeet)",
                "Pedro Marujo, Maria Grácio, \"Inês\" (voice generated via Narakeet)"
              )}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Anotação", "Continuity")}: </dt>
              <dd className="inline">Maria Grácio {t("e", "and")} Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Operador de Câmara", "Camera Operator")}: </dt>
              <dd className="inline">Manuel Grácio</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Operador de Som", "Sound Operator")}: </dt>
              <dd className="inline">Ivo Roxo, Martim Gouveia {t("e", "and")} Rafael Prazeres</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Operador de Drone", "Drone Operator")}: </dt>
              <dd className="inline">Diogo Silva</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Música", "Music")}: </dt>
              <dd className="inline">{t(
                "\"Eu, tu e a fuga\", \"Como não te sonhar?\" e \"Vieste-me buscar\" de Carlos \"Cadu\" Eduardo, Hugo Marques, João Faria, Rodrigo Sá e Rodrigo Sousa",
                "\"Eu, tu e a fuga\", \"Como não te sonhar?\" and \"Vieste-me buscar\" by Carlos \"Cadu\" Eduardo, Hugo Marques, João Faria, Rodrigo Sá and Rodrigo Sousa"
              )}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Maquilhagem", "Make-up")}: </dt>
              <dd className="inline">Maria Grácio</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Montagem", "Editing")}: </dt>
              <dd className="inline">Manuel Grácio {t("e", "and")} Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Unit Driver: </dt>
              <dd className="inline">Duarte Correia, Guadalupe Raposo, Rodrigo Sousa</dd>
            </div>
          </dl>
        </section>
      </div>
    </>
  );
};

export default Kael;
