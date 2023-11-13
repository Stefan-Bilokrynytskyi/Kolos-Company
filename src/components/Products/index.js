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
import { toJS } from "mobx";

import store from "../../store/Products";

function Products() {
  const { category } = useParams();
  console.log(toJS(store.collections));
  return (
    <div className={classes.products_page}>
      <Header />
      <Filter name={"Фільтр"} />
      <ProductsStore category={category} />
      <Footer />
    </div>
  );
}

export default Products;
