import Header from "@/components/Header";
import { LightboxGallery } from "@/components/LightboxImage";
import LightboxImage from "@/components/LightboxImage";
import { useLanguage } from "@/contexts/LanguageContext";

// Placeholders — substitui os imports e o array `photos` quando tiveres as 17 fotografias.
// Ex.:
// import foto01 from "@/assets/connect-fest-2024/foto01.jpg";
// const photos = [foto01, foto02, ...];
const photos: string[] = Array.from({ length: 17 }, (_, i) => "/placeholder.svg");

// Padrão pseudo-aleatório (determinístico) de spans para criar uma grelha tipo mosaico.
// col-span / row-span (12 colunas, várias alturas). Total pensado para 17 itens.
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
        <p className="text-sm text-muted-foreground italic mb-12">
          {t("Fotografia de evento", "Event photography")}
        </p>

        <LightboxGallery>
          <div className="grid grid-cols-12 auto-rows-[140px] md:auto-rows-[180px] gap-2 md:gap-3">
            {photos.map((src, i) => {
              const { col, row } = layout[i % layout.length];
              return (
                <div key={i} className={`${col} ${row} overflow-hidden bg-muted`}>
                  <LightboxImage
                    src={src}
                    alt={`Connect Fest 2024 — ${i + 1}`}
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
