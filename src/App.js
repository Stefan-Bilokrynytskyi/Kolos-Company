import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";
import BasketPage from "./components/BasketPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:category" element={<Products />} />
        <Route
          path="/products/:category/:id/:color"
          element={<ProductItem />}
        />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
