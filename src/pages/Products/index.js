import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductsStore from "./ProductsStore";
import Filter from "../../components/Filter";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { runInAction } from "mobx";
import store from "../../store/Products";

function Products() {
  const { category } = useParams();
  useEffect(() => {
    runInAction(() => {
      store.setCategory(category);
      store.getAccordion();
    });

    // Cleanup the autorun when the component unmounts
  }, [category]);

  return (
    <>
      <Header />
      <Filter />
      <ProductsStore category={category} />
      <Footer />
    </>
  );
}

export default Products;
