import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Ilha = () => {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-8">ilha</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <p className="text-sm leading-relaxed text-muted-foreground mb-8">
              {t(
                "\"ilha\" responde a uma proposta de trabalho com o tema \"Guerra e Paz\", com o limite de 9 planos, sendo obrigatoriamente um deles um plano sequência.",
                "\"ilha\" was made in response to a brief on the theme \"War and Peace\", with a limit of 9 shots, one of which had to be a long take."
              )}
            </p>
            <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
              <div>
                <dt className="inline font-medium text-foreground">{t("Realização e Argumento", "Director and Screenwriter")}: </dt>
                <dd className="inline">Martim Gouveia</dd>
              </div>
              <div>
                <dt className="inline font-medium text-foreground">{t("Elenco", "Cast")}: </dt>
                <dd className="inline">Tomás Brazão</dd>
              </div>
              <div>
                <dt className="inline font-medium text-foreground">{t("Música", "Music")}: </dt>
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
