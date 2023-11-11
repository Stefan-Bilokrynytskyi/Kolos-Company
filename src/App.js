import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";
import BasketPage from "./components/BasketPage";
import AboutPage from "./components/AboutPage";
import store from "./store/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path={`/products/:category/`} element={<Products />} />
        <Route
          path="/products/:category/:id/:color"
          element={<ProductItem />}
        />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;
