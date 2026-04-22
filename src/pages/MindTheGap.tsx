import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

const MindTheGap = () => {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-8">mind the gap</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5">
            <dl className="text-sm leading-relaxed text-muted-foreground space-y-1.5">
              <div>
                <dt className="inline font-medium text-foreground">{t("Autoria", "Author")}: </dt>
                <dd className="inline">Martim Gouveia</dd>
              </div>
              <div>
                <dt className="inline font-medium text-foreground">{t("Música", "Music")}: </dt>
                <dd className="inline">My Bloody Valentine — "you made me realise"</dd>
              </div>
            </dl>
          </div>
          <div className="md:w-3/5">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-k74YKXdilc"
                frameBorder="0"
                allowFullScreen
                title="mind the gap"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MindTheGap;
