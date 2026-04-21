import Header from "@/components/Header";

const Kael = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-2">KAEL</h1>
        <p className="text-sm text-muted-foreground italic mb-8">unreleased</p>

        <p className="text-sm leading-relaxed text-muted-foreground mb-12">
          Filme de Manuel Grácio e Martim Gouveia.
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-normal text-foreground mb-4">Ficha técnica</h2>
          <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
            <div>
              <dt className="inline font-medium text-foreground">Realização: </dt>
              <dd className="inline">Manuel Grácio</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Produção: </dt>
              <dd className="inline">Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Elenco: </dt>
              <dd className="inline">Pedro Marujo, Maria Grácio, "Inês" (voz gerada pelo site Narakeet)</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Anotação: </dt>
              <dd className="inline">Maria Grácio e Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Operador de Câmara: </dt>
              <dd className="inline">Manuel Grácio</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Operador de Som: </dt>
              <dd className="inline">Ivo Roxo, Martim Gouveia e Rafael Prazeres</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Operador de Drone: </dt>
              <dd className="inline">Diogo Silva</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Música: </dt>
              <dd className="inline">"Eu, tu e a fuga", "Como não te sonhar?" e "Vieste-me buscar" de Carlos "Cadu" Eduardo, Hugo Marques, João Faria, Rodrigo Sá e Rodrigo Sousa</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Maquilhagem: </dt>
              <dd className="inline">Maria Grácio</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Montagem: </dt>
              <dd className="inline">Manuel Grácio e Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Unit Driver: </dt>
              <dd className="inline">Duarte Correia, Guadalupe Raposo, Rodrigo Sousa</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-xl font-normal text-foreground mb-4">Frames</h2>
          <p className="text-sm text-muted-foreground italic">Em breve.</p>
        </section>
      </div>
    </>
  );
};

export default Kael;
