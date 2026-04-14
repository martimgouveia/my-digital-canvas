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
import Ilha from "./pages/Ilha";
import Atemporal from "./pages/Atemporal";
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
          <Route path="/antiglifo" element={<Antiglifo />} />
          <Route path="/antiglifo/0001" element={<Antiglifo0001 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
