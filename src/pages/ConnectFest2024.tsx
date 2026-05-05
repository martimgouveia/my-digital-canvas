import Header from "@/components/Header";
import { LightboxGallery } from "@/components/LightboxImage";
import LightboxImage from "@/components/LightboxImage";
import { useLanguage } from "@/contexts/LanguageContext";

import detsaw01 from "@/assets/connect-fest-2024/detsaw-coyote-01.jpg";
import detsaw02 from "@/assets/connect-fest-2024/detsaw-coyote-02.jpg";
import detsaw03 from "@/assets/connect-fest-2024/detsaw-coyote-03.jpg";
import detsaw04 from "@/assets/connect-fest-2024/detsaw-coyote-04.jpg";
import detsaw05 from "@/assets/connect-fest-2024/detsaw-coyote-05.jpg";
import detsaw06 from "@/assets/connect-fest-2024/detsaw-coyote-06.jpg";
import detsaw07 from "@/assets/connect-fest-2024/detsaw-coyote-07.jpg";
import detsaw08 from "@/assets/connect-fest-2024/detsaw-coyote-08.jpg";
import detsaw09 from "@/assets/connect-fest-2024/detsaw-coyote-09.jpg";
import detsaw10 from "@/assets/connect-fest-2024/detsaw-coyote-10.jpg";
import parteFraca01 from "@/assets/connect-fest-2024/parte-fraca-01.jpg";
import parteFraca02 from "@/assets/connect-fest-2024/parte-fraca-02.jpg";
import parteFraca03 from "@/assets/connect-fest-2024/parte-fraca-03.jpg";
import parteFraca04 from "@/assets/connect-fest-2024/parte-fraca-04.jpg";
import parteFraca05 from "@/assets/connect-fest-2024/parte-fraca-05.jpg";
import parteFraca06 from "@/assets/connect-fest-2024/parte-fraca-06.jpg";
import parteFraca07 from "@/assets/connect-fest-2024/parte-fraca-07.jpg";

interface Photo {
  src: string;
  band: string;
}

// Det·saW Coyote (10) + placeholders restantes (7) = 17
const detsawPhotos: Photo[] = [
  { src: detsaw01, band: "Det·saW Coyote" },
  { src: detsaw02, band: "Det·saW Coyote" },
  { src: detsaw03, band: "Det·saW Coyote" },
  { src: detsaw04, band: "Det·saW Coyote" },
  { src: detsaw05, band: "Det·saW Coyote" },
  { src: detsaw06, band: "Det·saW Coyote" },
  { src: detsaw07, band: "Det·saW Coyote" },
  { src: detsaw08, band: "Det·saW Coyote" },
  { src: detsaw09, band: "Det·saW Coyote" },
  { src: detsaw10, band: "Det·saW Coyote" },
];

const parteFracaPhotos: Photo[] = [
  { src: parteFraca01, band: "Parte Fraca" },
  { src: parteFraca02, band: "Parte Fraca" },
  { src: parteFraca03, band: "Parte Fraca" },
  { src: parteFraca04, band: "Parte Fraca" },
  { src: parteFraca05, band: "Parte Fraca" },
  { src: parteFraca06, band: "Parte Fraca" },
  { src: parteFraca07, band: "Parte Fraca" },
];

const realPhotos = [...detsawPhotos, ...parteFracaPhotos];

const photos: Photo[] = [
  ...realPhotos,
  ...Array.from({ length: Math.max(0, 17 - realPhotos.length) }, () => ({ src: "/placeholder.svg", band: "" })),
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
          <div className="columns-1 sm:columns-2 md:columns-3 gap-3 [column-fill:_balance]">
            {photos.map((photo, i) => {
              const alt = photo.band
                ? `Connect Fest 2024 — ${photo.band} — ${i + 1}`
                : `Connect Fest 2024 — ${i + 1}`;
              return (
                <div key={i} className="mb-3 break-inside-avoid">
                  <LightboxImage
                    src={photo.src}
                    alt={alt}
                    caption={photo.band || undefined}
                    className="w-full h-auto block"
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
