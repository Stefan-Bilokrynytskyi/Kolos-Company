import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Products from "./components/Products";
import ProductItem from "./components/ProductItem";
import BasketPage from "./components/BasketPage";
import AboutPage from "./components/AboutPage";
import store from "./store/Products";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await store.fetchCategoriesAndCollections("/api/category-collection");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={`/products/:category/`} element={<Products />} />
          <Route
            path="/products/:category/:id/:color"
            element={<ProductItem />}
          />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
