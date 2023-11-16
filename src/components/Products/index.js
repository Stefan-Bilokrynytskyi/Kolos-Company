import Header from "../Header";
import Footer from "../Footer";
import ProductItem from "../ProductItem";
import classes from "./Products.module.scss";
import ProductsStore from "./ProductsStore";
import Filter from "../Filter";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toJS, runInAction } from "mobx";
import { autorun } from "mobx";

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
    <div className={classes.products_page}>
      {console.log("here")}
      <Header />

      <Filter name={"Фільтр"} />

      <ProductsStore category={category} />

      <Footer />
      {console.log("here")}
    </div>
  );
}

export default Products;
