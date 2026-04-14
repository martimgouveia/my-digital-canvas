import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";
import background from "@/assets/background.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center 75%' }}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />

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

        <div className="flex justify-center gap-12">
          <Link to="/filme" className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            FILME
          </Link>
          <Link to="/fotografia" className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            FOTOGRAFIA
          </Link>
          <Link to="/antiglifo" className="text-xl text-foreground hover:text-muted-foreground transition-colors">
            ANTIGLIFO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
