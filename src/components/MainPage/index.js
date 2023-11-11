import Header from "../Header";
import Sections from "../Sections";
import Footer from "../Footer";
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
