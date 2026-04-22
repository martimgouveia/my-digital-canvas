import Header from "@/components/Header";
import LightboxImage, { LightboxGallery } from "@/components/LightboxImage";
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
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-normal text-foreground mb-4">SAMOUCO - O FIM DO MUNDO</h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Do outro lado da capital, cerne do nosso país, debaixo de uma infraestrutura que ditou uma nova era da nossa História, repete-se todos os dias a apanha ilegal da amêijoa-japónica no rio Tejo. Estas imagens resultam de um processo iniciado em 2024, durante a realização de um documentário etnográfico em parceria com Tiago Santos. Através da fotografia, revelam-se relações, tensões e constelações visuais que expõem camadas de trabalho, risco, migração e sobrevivência. Estes marisqueiros, maioritariamente emigrantes, vivem e trabalham em condições precárias, expostos à toxicidade do produto que recolhem e à instabilidade de um quotidiano marcado pela sobrevivência. O rio surge não apenas como cenário, mas como agente ativo, moldando corpos, ritmos e modos de vida. O Tejo aparece aqui como um território ferido e persistente, que absorve, devolve e transforma tudo o que nele habita.
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
                        alt={`Samouco — fotografia ${i + 1}`}
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
          <h2 className="text-xl font-normal text-foreground mb-4">Ficha técnica</h2>
          <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
            <div>
              <dt className="inline font-medium text-foreground">Fotografia e Texto: </dt>
              <dd className="inline">Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Montagem da exposição: </dt>
              <dd className="inline">Manuel Grácio e Martim Gouveia</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-normal text-foreground mb-4">Exposição</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            A exposição "Samouco — O Fim do Mundo" decorreu de 23 de fevereiro a 21 de março de 2026 no Mercado do Peixe, nas Caldas da Rainha. Esta exposição organizou-se pela montagem e pelo diálogo entre imagens. Não apresentou uma narrativa linear, dividindo-se em três núcleos que percorreram o objeto central do trabalho, o espaço onde ele acontece e, por fim, o universo íntimo de quem o realiza. O espaço público em si destinado ao comércio piscatório é um facto importante e envolvente no conceito deste projeto.
          </p>
          <LightboxGallery>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {expoImages.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden">
                  <LightboxImage
                    src={img}
                    alt={`Exposição Samouco ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </LightboxGallery>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-normal text-foreground mb-4">Imprensa</h2>
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
                caption="Gazeta das Caldas, 26 de fevereiro de 2026 — “Fotografia no Mercado do Peixe”"
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
