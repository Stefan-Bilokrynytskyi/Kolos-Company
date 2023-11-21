import Header from "../Header";
import Footer from "../Footer";
import classes from "./CollectionProducts.module.scss";
import CollectionStore from "./CollectionStore";
import Filter from "../Filter";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toJS, runInAction } from "mobx";
import store from "../../store/Products";

function CollectionProducts() {
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
      <Header />

      <Filter name={"Фільтр"} />

      <CollectionStore category={category} />

      <Footer />
    </div>
  );
}

export default CollectionProducts;
