import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryContextValue {
  items: GalleryItem[];
  register: (item: GalleryItem) => number;
  open: (index: number) => void;
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

interface LightboxGalleryProps {
  children: ReactNode;
}

export const LightboxGallery = ({ children }: LightboxGalleryProps) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const register = (item: GalleryItem) => {
    let index = -1;
    setItems((prev) => {
      const existing = prev.findIndex((p) => p.src === item.src);
      if (existing !== -1) {
        index = existing;
        return prev;
      }
      index = prev.length;
      return [...prev, item];
    });
    return index;
  };

  const open = (index: number) => setOpenIndex(index);
  const close = () => {
    setVisible(false);
    setTimeout(() => setOpenIndex(null), 300);
  };
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : i === 0 ? items.length - 1 : i - 1));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : i === items.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (openIndex !== null) {
      const t = requestAnimationFrame(() => setVisible(true));
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      };
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        cancelAnimationFrame(t);
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [openIndex, items.length]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <GalleryContext.Provider value={{ items, register, open }}>
      {children}
      {current && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 text-foreground hover:text-muted-foreground transition-colors z-10"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors z-10"
                aria-label="Anterior"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition-colors z-10"
                aria-label="Seguinte"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}
          <div
            className={`max-w-[95vw] max-h-[95vh] flex flex-col items-center transition-transform duration-300 ${
              visible ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            {current.caption && (
              <p className="text-sm text-muted-foreground italic mt-4 text-left max-w-2xl">
                {current.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </GalleryContext.Provider>
  );
};

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

const LightboxImage = ({ src, alt, className = "", caption }: LightboxImageProps) => {
  const ctx = useContext(GalleryContext);
  const [standaloneOpen, setStandaloneOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [myIndex, setMyIndex] = useState<number | null>(null);

  // Register with parent gallery (if any)
  useEffect(() => {
    if (ctx) {
      const idx = ctx.register({ src, alt, caption });
      setMyIndex(idx);
    }
  }, [ctx, src, alt, caption]);

  useEffect(() => {
    if (standaloneOpen) {
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
  }, [standaloneOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setStandaloneOpen(false), 300);
  };

  const handleClick = () => {
    if (ctx && myIndex !== null) {
      ctx.open(myIndex);
    } else {
      setStandaloneOpen(true);
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in transition-opacity duration-300 hover:opacity-80 ${className}`}
        onClick={handleClick}
      />
      {standaloneOpen && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          <button
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
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
