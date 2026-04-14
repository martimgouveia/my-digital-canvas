import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-background/90 backdrop-blur-sm">
      <nav className="flex gap-6">
        <Link to="/filme" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
          FILME
        </Link>
        <Link to="/fotografia" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
          FOTOGRAFIA
        </Link>
        <Link to="/antiglifo" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
          ANTIGLIFO
        </Link>
      </nav>
      <Link to="/" className="text-sm tracking-widest text-foreground hover:text-muted-foreground transition-colors">
        martim gouveia
      </Link>
    </header>
  );
};

export default Header;
