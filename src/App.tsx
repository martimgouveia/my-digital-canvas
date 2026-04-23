import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Filme from "./pages/Filme";
import Flores from "./pages/Flores";
import Kael from "./pages/Kael";
import MindTheGap from "./pages/MindTheGap";
import AteAMareSubir from "./pages/AteAMareSubir";
import Fotografia from "./pages/Fotografia";
import Antiglifo from "./pages/Antiglifo";
import Antiglifo0001 from "./pages/Antiglifo0001";
import Antiglifo0002 from "./pages/Antiglifo0002";
import Antiglifo0003 from "./pages/Antiglifo0003";
import Ilha from "./pages/Ilha";
import Atemporal from "./pages/Atemporal";
import Samouco from "./pages/Samouco";
import OutrosProjetos from "./pages/OutrosProjetos";
import ConnectFest2024 from "./pages/ConnectFest2024";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const appRoutes = (
  <>
    <Route path="/" element={<Index />} />
    <Route path="filme" element={<Filme />} />
    <Route path="filme/ilha" element={<Ilha />} />
    <Route path="filme/flores" element={<Flores />} />
    <Route path="filme/kael" element={<Kael />} />
    <Route path="filme/mind-the-gap" element={<MindTheGap />} />
    <Route path="filme/ate-a-mare-subir" element={<AteAMareSubir />} />
    <Route path="fotografia" element={<Fotografia />} />
    <Route path="fotografia/atemporal" element={<Atemporal />} />
    <Route path="fotografia/samouco" element={<Samouco />} />
    <Route path="antiglifo" element={<Antiglifo />} />
    <Route path="antiglifo/0001" element={<Antiglifo0001 />} />
    <Route path="antiglifo/0002" element={<Antiglifo0002 />} />
    <Route path="antiglifo/0003" element={<Antiglifo0003 />} />
    <Route path="outros-projetos" element={<OutrosProjetos />} />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/filme" element={<Filme />} />
            <Route path="/filme/ilha" element={<Ilha />} />
            <Route path="/filme/flores" element={<Flores />} />
            <Route path="/filme/kael" element={<Kael />} />
            <Route path="/filme/mind-the-gap" element={<MindTheGap />} />
            <Route path="/filme/ate-a-mare-subir" element={<AteAMareSubir />} />
            <Route path="/fotografia" element={<Fotografia />} />
            <Route path="/fotografia/atemporal" element={<Atemporal />} />
            <Route path="/fotografia/samouco" element={<Samouco />} />
            <Route path="/antiglifo" element={<Antiglifo />} />
            <Route path="/antiglifo/0001" element={<Antiglifo0001 />} />
            <Route path="/antiglifo/0002" element={<Antiglifo0002 />} />
            <Route path="/antiglifo/0003" element={<Antiglifo0003 />} />
            <Route path="/outros-projetos" element={<OutrosProjetos />} />
            <Route path="/outros-projetos/connect-fest" element={<ConnectFest2024 />} />

            {/* English routes — same components, language detected via URL */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/filme" element={<Filme />} />
            <Route path="/en/filme/ilha" element={<Ilha />} />
            <Route path="/en/filme/flores" element={<Flores />} />
            <Route path="/en/filme/kael" element={<Kael />} />
            <Route path="/en/filme/mind-the-gap" element={<MindTheGap />} />
            <Route path="/en/filme/ate-a-mare-subir" element={<AteAMareSubir />} />
            <Route path="/en/fotografia" element={<Fotografia />} />
            <Route path="/en/fotografia/atemporal" element={<Atemporal />} />
            <Route path="/en/fotografia/samouco" element={<Samouco />} />
            <Route path="/en/antiglifo" element={<Antiglifo />} />
            <Route path="/en/antiglifo/0001" element={<Antiglifo0001 />} />
            <Route path="/en/antiglifo/0002" element={<Antiglifo0002 />} />
            <Route path="/en/antiglifo/0003" element={<Antiglifo0003 />} />
            <Route path="/en/outros-projetos" element={<OutrosProjetos />} />
            <Route path="/en/outros-projetos/connect-fest" element={<ConnectFest2024 />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
