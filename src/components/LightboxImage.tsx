import { useState, useEffect, createContext, useContext, useRef, ReactNode, useCallback, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryContextValue {
  register: (item: GalleryItem) => void;
  unregister: (src: string) => void;
  open: (src: string) => void;
}

const GalleryContext = createContext<GalleryContextValue | null>(null);

interface LightboxGalleryProps {
  children: ReactNode;
}

export const LightboxGallery = ({ children }: LightboxGalleryProps) => {
  // Ref holds the source-of-truth list (sync, ordered by registration)
  const itemsRef = useRef<GalleryItem[]>([]);
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const register = useCallback((item: GalleryItem) => {
    const list = itemsRef.current;
    const existing = list.findIndex((p) => p.src === item.src);
    if (existing === -1) {
      list.push(item);
    } else {
      // Update metadata (alt/caption) if changed
      list[existing] = item;
    }
  }, []);

  const unregister = useCallback((src: string) => {
    const list = itemsRef.current;
    const idx = list.findIndex((p) => p.src === src);
    if (idx !== -1) {
      list.splice(idx, 1);
    }
  }, []);

  const open = useCallback((src: string) => setOpenSrc(src), []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpenSrc(null), 300);
  }, []);

  const prev = useCallback(() => {
    setOpenSrc((cur) => {
      if (cur === null) return cur;
      const list = itemsRef.current;
      if (list.length <= 1) return cur;
      const i = list.findIndex((p) => p.src === cur);
      if (i === -1) return cur;
      return list[(i - 1 + list.length) % list.length].src;
    });
  }, []);

  const next = useCallback(() => {
    setOpenSrc((cur) => {
      if (cur === null) return cur;
      const list = itemsRef.current;
      if (list.length <= 1) return cur;
      const i = list.findIndex((p) => p.src === cur);
      if (i === -1) return cur;
      return list[(i + 1) % list.length].src;
    });
  }, []);

  useEffect(() => {
    if (openSrc !== null) {
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
  }, [openSrc, close, prev, next]);

  const contextValue = useMemo(() => ({ register, unregister, open }), [register, unregister, open]);
  const items = itemsRef.current;
  const current = openSrc !== null ? items.find((p) => p.src === openSrc) ?? null : null;

  return (
    <GalleryContext.Provider value={contextValue}>
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

  // Register with parent gallery (if any)
  useEffect(() => {
    if (ctx) {
      ctx.register({ src, alt, caption });
      return () => ctx.unregister(src);
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
    if (ctx) {
      ctx.open(src);
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
