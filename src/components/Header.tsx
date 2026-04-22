import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  const { t, localizePath } = useLanguage();
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-background/90 backdrop-blur-sm gap-6">
      <nav className="flex gap-6 flex-wrap items-center">
        <Link to={localizePath("/filme")} className="text-base text-foreground hover:opacity-60 transition-opacity">
          {t("FILME", "FILM")}
        </Link>
        <Link to={localizePath("/fotografia")} className="text-base text-foreground hover:opacity-60 transition-opacity">
          {t("FOTOGRAFIA", "PHOTOGRAPHY")}
        </Link>
        <Link to={localizePath("/antiglifo")} className="text-base text-foreground hover:opacity-60 transition-opacity">
          ANTIGLIFO
        </Link>
        <Link to={localizePath("/outros-projetos")} className="text-base text-foreground hover:opacity-60 transition-opacity">
          {t("OUTROS PROJETOS", "OTHER PROJECTS")}
        </Link>
      </nav>
      <div className="flex items-center gap-6">
        <LanguageToggle />
        <Link to={localizePath("/")} className="text-base text-foreground hover:opacity-60 transition-opacity whitespace-nowrap">
          martim gouveia
        </Link>
      </div>
    </header>
  );
};

export default Header;
