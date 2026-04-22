import { createContext, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Language = "pt" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  /** Returns text in the current language. */
  t: (pt: string, en: string) => string;
  /** Prefix paths with /en when in English. */
  localizePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const lang: Language = location.pathname === "/en" || location.pathname.startsWith("/en/") ? "en" : "pt";

  const setLang = (newLang: Language) => {
    const currentPath = location.pathname;
    let basePath = currentPath;
    if (currentPath === "/en" || currentPath.startsWith("/en/")) {
      basePath = currentPath.slice(3) || "/";
    }
    if (newLang === "en") {
      const target = basePath === "/" ? "/en" : `/en${basePath}`;
      navigate(target);
    } else {
      navigate(basePath);
    }
  };

  const t = (pt: string, en: string) => (lang === "en" ? en : pt);

  const localizePath = (path: string) => {
    if (lang === "en") {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, localizePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
