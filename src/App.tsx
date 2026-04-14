import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Filme from "./pages/Filme";
import Fotografia from "./pages/Fotografia";
import Antiglifo from "./pages/Antiglifo";
import Antiglifo0001 from "./pages/Antiglifo0001";
import Antiglifo0002 from "./pages/Antiglifo0002";
import Antiglifo0003 from "./pages/Antiglifo0003";
import Ilha from "./pages/Ilha";
import Atemporal from "./pages/Atemporal";
import Samouco from "./pages/Samouco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/filme" element={<Filme />} />
          <Route path="/filme/ilha" element={<Ilha />} />
          <Route path="/fotografia" element={<Fotografia />} />
          <Route path="/fotografia/atemporal" element={<Atemporal />} />
          <Route path="/fotografia/samouco" element={<Samouco />} />
          <Route path="/antiglifo" element={<Antiglifo />} />
          <Route path="/antiglifo/0001" element={<Antiglifo0001 />} />
          <Route path="/antiglifo/0002" element={<Antiglifo0002 />} />
          <Route path="/antiglifo/0003" element={<Antiglifo0003 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
