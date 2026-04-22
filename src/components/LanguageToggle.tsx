import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 text-sm ${className}`}>
      <button
        onClick={() => setLang("pt")}
        className={`transition-opacity hover:opacity-60 ${lang === "pt" ? "text-foreground" : "text-muted-foreground"}`}
        aria-label="Português"
      >
        PT
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLang("en")}
        className={`transition-opacity hover:opacity-60 ${lang === "en" ? "text-foreground" : "text-muted-foreground"}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
