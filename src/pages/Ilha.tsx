import Header from "@/components/Header";

const Ilha = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-8">ilha</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <p className="text-sm leading-relaxed text-muted-foreground mb-8">
              "ilha" responde a uma proposta de trabalho com o tema "Guerra e Paz",
              com o limite de 9 planos, sendo obrigatoriamente um deles um plano sequência.
            </p>
            <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
              <div>
                <dt className="inline font-medium text-foreground">Realização e Argumento: </dt>
                <dd className="inline">Martim Gouveia</dd>
              </div>
              <div>
                <dt className="inline font-medium text-foreground">Elenco: </dt>
                <dd className="inline">Tomás Brazão</dd>
              </div>
              <div>
                <dt className="inline font-medium text-foreground">Música: </dt>
                <dd className="inline">Aphex Twin — "Stone in Focus"</dd>
              </div>
            </dl>
          </div>
          <div className="md:w-3/5">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hEeAZbXuJoU"
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
