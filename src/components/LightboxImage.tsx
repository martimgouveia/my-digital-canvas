import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

const LightboxImage = ({ src, alt, className = "", caption }: LightboxImageProps) => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      const t = requestAnimationFrame(() => setVisible(true));
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        cancelAnimationFrame(t);
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in transition-opacity duration-300 hover:opacity-80 ${className}`}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute top-6 right-6 text-foreground hover:text-muted-foreground transition-colors z-10"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <div
            className={`max-w-[95vw] max-h-[95vh] flex flex-col items-center transition-transform duration-300 ${
              visible ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {caption && (
              <p className="text-sm text-muted-foreground italic mt-4 text-left max-w-2xl">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxImage;
