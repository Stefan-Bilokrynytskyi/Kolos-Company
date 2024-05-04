import Header from "../../components/Header";
import Sections from "../../components/Sections";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import store from "../../store/Products";

function MainPage() {
  useEffect(() => {
    store.setGlobalCategory(false);
  }, []);

  return (
    <div>
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default MainPage;
