import classes from "./ProductsStore.module.scss";
import { useEffect, useState } from "react";
import store from "../../../store/Products";
import { toJS } from "mobx";
import ListOfProducts from "./ListOfProducts";

function ProductsStore() {
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        await store.fetchProducts("api/items");
        const productsArr = toJS(store.productPerpage);
        setProductsData(productsArr);
        console.log(productsArr);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={classes.store_conteiner}>
      {productsData ? (
        <ListOfProducts productsData={productsData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductsStore;
