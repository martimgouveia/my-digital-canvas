import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      {/* Dark overlay placeholder for background image */}
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-widest text-foreground mb-8">
          martim gouveia
        </h1>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://www.instagram.com/martimgouveia_/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.youtube.com/@martimgouveia_" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors">
            <Youtube size={20} />
          </a>
          <a href="mailto:martimgouveia05@gmail.com" className="text-foreground hover:text-muted-foreground transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="flex justify-center gap-10">
          <Link to="/filme" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
            FILME
          </Link>
          <Link to="/fotografia" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
            FOTOGRAFIA
          </Link>
          <Link to="/antiglifo" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
            ANTIGLIFO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
