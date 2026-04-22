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
import expo1 from "@/assets/samouco/expo1.jpg";
import expo2 from "@/assets/samouco/expo2.jpg";
import expo3 from "@/assets/samouco/expo3.jpg";
import expo4 from "@/assets/samouco/expo4.jpg";
import expo5 from "@/assets/samouco/expo5.jpg";
import expo6 from "@/assets/samouco/expo6.jpg";
import expo7 from "@/assets/samouco/expo7.jpg";
import expo8 from "@/assets/samouco/expo8.jpg";
import extra1 from "@/assets/samouco/extra1.jpg";
import extra2 from "@/assets/samouco/extra2.jpg";
import extra3 from "@/assets/samouco/extra3.jpg";
import extra4 from "@/assets/samouco/extra4.jpg";
import extra5 from "@/assets/samouco/extra5.jpg";
import projeto1 from "@/assets/samouco/projeto1.jpg";
import projeto2 from "@/assets/samouco/projeto2.jpg";
import gazetaCaldas from "@/assets/samouco/gazeta-caldas.jpg";

const projetoImages = [extra1, extra2, extra3, extra4, extra5, projeto1, projeto2];
const expoImages = [expo1, expo2, expo3, expo4, expo5, expo6, expo7, expo8];

const Samouco = () => {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-normal text-foreground mb-4">
          {t("SAMOUCO - O FIM DO MUNDO", "SAMOUCO — THE END OF THE WORLD")}
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          {t(
            "Do outro lado da capital, cerne do nosso país, debaixo de uma infraestrutura que ditou uma nova era da nossa História, repete-se todos os dias a apanha ilegal da amêijoa-japónica no rio Tejo. Estas imagens resultam de um processo iniciado em 2024, durante a realização de um documentário etnográfico em parceria com Tiago Santos. Através da fotografia, revelam-se relações, tensões e constelações visuais que expõem camadas de trabalho, risco, migração e sobrevivência. Estes marisqueiros, maioritariamente emigrantes, vivem e trabalham em condições precárias, expostos à toxicidade do produto que recolhem e à instabilidade de um quotidiano marcado pela sobrevivência. O rio surge não apenas como cenário, mas como agente ativo, moldando corpos, ritmos e modos de vida. O Tejo aparece aqui como um território ferido e persistente, que absorve, devolve e transforma tudo o que nele habita.",
            "On the other side of the capital, at the core of our country, beneath an infrastructure that marked a new era in our history, the illegal harvesting of the Japanese clam in the Tagus River is repeated every day. These images come from a process started in 2024, during the making of an ethnographic documentary in partnership with Tiago Santos. Through photography, relationships, tensions and visual constellations are revealed, exposing layers of labour, risk, migration and survival. These shellfish gatherers — mostly immigrants — live and work in precarious conditions, exposed to the toxicity of what they harvest and to the instability of a daily life shaped by survival. The river appears not only as a setting, but as an active agent, shaping bodies, rhythms and ways of life. The Tagus emerges here as a wounded yet persistent territory that absorbs, returns and transforms everything that inhabits it."
          )}
        </p>

        <section className="mb-16">
          <LightboxGallery>
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {projetoImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <div className="aspect-[3/2] overflow-hidden bg-muted">
                      <LightboxImage
                        src={img}
                        alt={`Samouco — ${t("fotografia", "photograph")} ${i + 1}`}
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

        <section className="mb-16">
          <h2 className="text-xl font-normal text-foreground mb-4">{t("Ficha técnica", "Credits")}</h2>
          <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
            <div>
              <dt className="inline font-medium text-foreground">{t("Fotografia e Texto", "Photography and Text")}: </dt>
              <dd className="inline">Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">{t("Montagem da exposição", "Exhibition setup")}: </dt>
              <dd className="inline">Manuel Grácio {t("e", "and")} Martim Gouveia</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-normal text-foreground mb-4">{t("Exposição", "Exhibition")}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {t(
              "A exposição \"Samouco — O Fim do Mundo\" decorreu de 23 de fevereiro a 21 de março de 2026 no Mercado do Peixe, nas Caldas da Rainha. Esta exposição organizou-se pela montagem e pelo diálogo entre imagens. Não apresentou uma narrativa linear, dividindo-se em três núcleos que percorreram o objeto central do trabalho, o espaço onde ele acontece e, por fim, o universo íntimo de quem o realiza. O espaço público em si destinado ao comércio piscatório é um facto importante e envolvente no conceito deste projeto.",
              "The exhibition \"Samouco — The End of the World\" ran from 23 February to 21 March 2026 at the Mercado do Peixe in Caldas da Rainha. It was organised through the layout and dialogue between images. It did not present a linear narrative, but was instead divided into three nuclei covering the central subject of the work, the space where it takes place, and finally the intimate universe of those who carry it out. The public space itself, dedicated to fish trade, is an important and enveloping element in the concept of this project."
            )}
          </p>
          <LightboxGallery>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expoImages.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden">
                  <LightboxImage
                    src={img}
                    alt={`${t("Exposição", "Exhibition")} Samouco ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </LightboxGallery>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-normal text-foreground mb-4">{t("Imprensa", "Press")}</h2>
          <ul className="text-sm text-muted-foreground leading-relaxed space-y-3 mb-6">
            <li>
              <a
                href="https://jornaldascaldas.pt/2026/03/01/martim-gouveia-expoe-no-mercado-do-peixe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:opacity-60 transition-opacity underline underline-offset-4"
              >
                Jornal das Caldas — "Martim Gouveia expõe no Mercado do Peixe" (01/03/2026)
              </a>
            </li>
            <li>
              <span className="text-foreground">Gazeta das Caldas</span> — "Fotografia no Mercado do Peixe" (26/02/2026)
            </li>
          </ul>
          <LightboxGallery>
            <div className="max-w-md">
              <LightboxImage
                src={gazetaCaldas}
                alt="Gazeta das Caldas — Fotografia no Mercado do Peixe (26/02/2026)"
                caption={t(
                  "Gazeta das Caldas, 26 de fevereiro de 2026 — \"Fotografia no Mercado do Peixe\"",
                  "Gazeta das Caldas, 26 February 2026 — \"Fotografia no Mercado do Peixe\""
                )}
                className="w-full h-auto"
              />
            </div>
          </LightboxGallery>
        </section>
      </div>
    </>
  );
};

export default Samouco;
