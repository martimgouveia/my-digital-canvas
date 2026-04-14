import Header from "@/components/Header";

const Ilha = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-8">ilha</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              "ilha" responde a uma proposta de trabalho com o tema "Guerra e Paz",
              com o limite de 9 planos, sendo obrigatoriamente um deles um plano sequência.
            </p>
          </div>
          <div className="md:w-3/5">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                title="ilha"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ilha;
