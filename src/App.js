import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import MainPage from "./components/MainPage";
import Products from "./components/Products";
import axios from "axios";
import $api from "./components/http";

function App() {
  useEffect(() => {
    // localStorage.setItem(
    //   "token",
    //   "Token 8e315cacba2e94513f4f904b301c96ddb949c656"
    // );
    async function fetchData() {
      try {
        const itemsResponse = await $api.get("/api/items");
        console.log(itemsResponse);
      } catch (error) {
        console.error("Axios Error:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
