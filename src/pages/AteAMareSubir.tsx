import Header from "@/components/Header";

const AteAMareSubir = () => {
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-8">Até a Maré Subir</h1>

        <p className="text-sm leading-relaxed text-muted-foreground mb-12">
          Todos os dias, centenas de pessoas, a maioria imigrantes, deslocam-se em grupos para irem à apanha da tão desejada amêijoa que habita no Rio Tejo. Apesar da ilegalidade desta atividade, dos seus riscos e condições adversas, esta é a única opção que os moradores do Montijo e arredores encontram para conseguirem sobreviver e sustentar as suas famílias.
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-normal text-foreground mb-4">Ficha técnica</h2>
          <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
            <div>
              <dt className="inline font-medium text-foreground">Direção de Fotografia: </dt>
              <dd className="inline">Martim Gouveia e Tiago Santos</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Direção de Som: </dt>
              <dd className="inline">Martim Gouveia</dd>
            </div>
            <div>
              <dt className="inline font-medium text-foreground">Montagem: </dt>
              <dd className="inline">Tiago Santos</dd>
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

export default AteAMareSubir;
