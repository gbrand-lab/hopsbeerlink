import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Localizacao from "./pages/Localizacao";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio/:slug" element={<Cardapio />} />
      <Route path="/localizacao" element={<Localizacao />} />
    </Routes>
  );
}
