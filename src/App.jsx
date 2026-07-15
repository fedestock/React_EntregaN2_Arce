import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./components/NotFound";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container">
        <Routes>
          {/* Catálogo completo */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Catálogo filtrado por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Detalle de un producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
