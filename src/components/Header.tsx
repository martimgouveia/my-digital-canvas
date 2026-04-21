import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-background/90 backdrop-blur-sm gap-6">
      <nav className="flex gap-6 flex-wrap">
        <Link to="/filme" className="text-base text-foreground hover:opacity-60 transition-opacity">
          FILME
        </Link>
        <Link to="/fotografia" className="text-base text-foreground hover:opacity-60 transition-opacity">
          FOTOGRAFIA
        </Link>
        <Link to="/antiglifo" className="text-base text-foreground hover:opacity-60 transition-opacity">
          ANTIGLIFO
        </Link>
        <Link to="/outros-projetos" className="text-base text-foreground hover:opacity-60 transition-opacity">
          OUTROS PROJETOS
        </Link>
      </nav>
      <Link to="/" className="text-base text-foreground hover:opacity-60 transition-opacity whitespace-nowrap">
        martim gouveia
      </Link>
    </header>
  );
};

export default Header;
