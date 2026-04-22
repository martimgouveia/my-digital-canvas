import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const Flores = () => {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-light text-foreground mb-8">Flores</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
              <div>
                <dt className="inline font-medium text-foreground">{t("Realização e Argumento", "Director and Screenwriter")}: </dt>
                <dd className="inline">Martim Gouveia</dd>
              </div>
              <div>
                <dt className="inline font-medium text-foreground">{t("Música", "Music")}: </dt>
                <dd className="inline">Rádio Macau — "Encontro" e "Tânger"</dd>
              </div>
            </dl>
          </div>
          <div className="md:w-3/5">
            <div className="aspect-video bg-secondary flex items-center justify-center">
              <span className="text-muted-foreground text-sm italic">{t("vídeo em breve", "video coming soon")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flores;
