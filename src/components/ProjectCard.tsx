import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  to: string;
  title: string;
  year: string;
  image?: string;
}

const ProjectCard = ({ to, title, year, image }: ProjectCardProps) => {
  const { localizePath } = useLanguage();
  return (
    <Link to={localizePath(to)} className="group relative block aspect-[4/3] overflow-hidden bg-secondary">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <span className="text-muted-foreground text-sm">{title}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-normal text-foreground">{title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{year}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
