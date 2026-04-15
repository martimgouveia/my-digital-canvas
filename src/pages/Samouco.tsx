import Header from "@/components/Header";

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

export default Samouco;
