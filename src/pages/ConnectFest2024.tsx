import Header from "@/components/Header";
import { LightboxGallery } from "@/components/LightboxImage";
import LightboxImage from "@/components/LightboxImage";
import { useLanguage } from "@/contexts/LanguageContext";

import detsaw01 from "@/assets/connect-fest-2024/detsaw-coyote-01.jpg";
import detsaw02 from "@/assets/connect-fest-2024/detsaw-coyote-02.jpg";
import detsaw03 from "@/assets/connect-fest-2024/detsaw-coyote-03.jpg";
import detsaw04 from "@/assets/connect-fest-2024/detsaw-coyote-04.jpg";

interface Photo {
  src: string;
  band: string;
}

// Det·saW Coyote (4) + placeholders para Det·saW Coyote/Parte Fraca restantes (13) = 17
const photos: Photo[] = [
  { src: detsaw01, band: "Det·saW Coyote" },
  { src: detsaw02, band: "Det·saW Coyote" },
  { src: detsaw03, band: "Det·saW Coyote" },
  { src: detsaw04, band: "Det·saW Coyote" },
  ...Array.from({ length: 13 }, () => ({ src: "/placeholder.svg", band: "" })),
];

// Padrão pseudo-aleatório (determinístico) de spans para criar uma grelha tipo mosaico.
const layout: { col: string; row: string }[] = [
  { col: "col-span-6", row: "row-span-2" },
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-3", row: "row-span-2" },
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-2" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-2" },
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-5", row: "row-span-2" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-6", row: "row-span-2" },
  { col: "col-span-3", row: "row-span-1" },
  { col: "col-span-3", row: "row-span-2" },
  { col: "col-span-4", row: "row-span-1" },
  { col: "col-span-4", row: "row-span-2" },
  { col: "col-span-4", row: "row-span-1" },
];

const ConnectFest2024 = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-light tracking-widest text-foreground mb-2">
          CONNECT FEST
        </h1>
        <p className="text-sm text-muted-foreground mb-2">2024</p>
        <p className="text-sm text-muted-foreground italic mb-2">
          {t("Fotografia de evento", "Event photography")}
        </p>
        <p className="text-sm text-muted-foreground mb-12">
          {t("Bandas: Det·saW Coyote e Parte Fraca", "Bands: Det·saW Coyote and Parte Fraca")}
        </p>

        <LightboxGallery>
          <div className="grid grid-cols-12 auto-rows-[140px] md:auto-rows-[180px] gap-2 md:gap-3">
            {photos.map((photo, i) => {
              const { col, row } = layout[i % layout.length];
              const alt = photo.band
                ? `Connect Fest 2024 — ${photo.band} — ${i + 1}`
                : `Connect Fest 2024 — ${i + 1}`;
              return (
                <div key={i} className={`${col} ${row} overflow-hidden bg-muted`}>
                  <LightboxImage
                    src={photo.src}
                    alt={alt}
                    caption={photo.band || undefined}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </LightboxGallery>
      </div>
    </>
  );
};

export default ConnectFest2024;
