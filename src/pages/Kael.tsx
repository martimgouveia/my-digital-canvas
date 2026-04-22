import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Kael = () => {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-2">KAEL</h1>
        <p className="text-sm text-muted-foreground italic mb-8">unreleased</p>

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

        <section>
          <h2 className="text-xl font-normal text-foreground mb-4">Frames</h2>
          <p className="text-sm text-muted-foreground italic">{t("Em breve.", "Coming soon.")}</p>
        </section>
      </div>
    </>
  );
};

export default Kael;
