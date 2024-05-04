import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";
import AboutPage from "./pages/AboutPage";
import CollectionProducts from "./pages/CollectionProducts";
import ContactUsPage from "./pages/ContactUsPage";
import OrderCompleted from "./pages/OrderCompleted";
import store from "./store/Products";
import { useEffect, useState } from "react";
import ReturnProductPage from "./pages/ReturnProductPage";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await store.fetchCategoriesAndCollections("/api/category-collection");
      } finally {
        setIsLoading(false);
        const storedBasket = localStorage.getItem("basket");

        if (storedBasket) {
          store.setNewBasket(JSON.parse(storedBasket));
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={`/products/:category/`} element={<Products />} />
          <Route path="/order-completed" element={<OrderCompleted />} />
          <Route path={`/products/:gender/:category/`} element={<Products />} />
          <Route path={`/collection-items/`} element={<CollectionProducts />} />
          <Route path={`/contact-us/`} element={<ContactUsPage />} />
          <Route
            path="/products/:category/:id/:color"
            element={<ProductPage />}
          />
          <Route path="/cart" element={<BasketPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/return_product" element={<ReturnProductPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
