import Header from "@/components/Header";
import expo1 from "@/assets/samouco/expo1.jpg";
import expo2 from "@/assets/samouco/expo2.jpg";
import expo3 from "@/assets/samouco/expo3.jpg";
import expo4 from "@/assets/samouco/expo4.jpg";
import expo5 from "@/assets/samouco/expo5.jpg";
import expo6 from "@/assets/samouco/expo6.jpg";
import expo7 from "@/assets/samouco/expo7.jpg";
import expo8 from "@/assets/samouco/expo8.jpg";

const expoImages = [expo1, expo2, expo3, expo4, expo5, expo6, expo7, expo8];

const Samouco = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-5 pb-16 max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-normal text-foreground mb-4">SAMOUCO - O FIM DO MUNDO</h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-12 max-w-2xl">
          {/* Descrição do projeto — a preencher */}
        </p>

        <section className="mb-16">
          <h2 className="text-xl font-normal text-foreground mb-4">Trabalho</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Uma série fotográfica que documenta o Samouco, explorando a sua paisagem, os seus habitantes e a relação com o estuário do Tejo — um lugar onde o tempo parece suspender-se no fim do mundo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">foto 1</span>
            </div>
            <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm">foto 2</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-normal text-foreground mb-4">Exposição</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            A exposição "Samouco — O Fim do Mundo" decorreu de 23 de fevereiro a 21 de março de 2026 no Mercado do Peixe, nas Caldas da Rainha. O espaço industrial do mercado acolheu as fotografias, criando um diálogo singular entre as imagens do Samouco e a arquitetura crua do local.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expoImages.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={`Exposição Samouco ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Samouco;
