import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import background from "@/assets/background.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const { t, localizePath } = useLanguage();
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center 75%' }}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />

      <div className="absolute top-6 right-10 z-20">
        <LanguageToggle />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-normal text-foreground mb-5">
          martim gouveia
        </h1>

        <div className="flex justify-center gap-8 mb-12">
          <a href="https://www.instagram.com/martimgouveia_/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors text-2xl">
            <Instagram size={24} />
          </a>
          <a href="https://www.youtube.com/@martimgouveia_" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors text-2xl">
            <Youtube size={24} />
          </a>
          <a href="mailto:martimgouveia05@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors text-2xl">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          <Link to={localizePath("/filme")} className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            {t("FILME", "FILM")}
          </Link>
          <Link to={localizePath("/fotografia")} className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            {t("FOTOGRAFIA", "PHOTOGRAPHY")}
          </Link>
          <Link to={localizePath("/antiglifo")} className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            ANTIGLIFO
          </Link>
          <Link to={localizePath("/outros-projetos")} className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            {t("OUTROS PROJETOS", "OTHER PROJECTS")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
