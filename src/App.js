import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MainPage from "./components/MainPage";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
        <Route path={`/productItem`} element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
