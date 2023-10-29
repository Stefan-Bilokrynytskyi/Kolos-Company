import classes from "./ProductsStore.module.scss";
import { useEffect, useState } from "react";
import store from "../../../store/Products";
import { toJS } from "mobx";
import ListOfProducts from "./ListOfProducts";

function ProductsStore({ url }) {
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        await store.fetchProducts(`/api/products/${url}`);
        const productsArr = toJS(store.productPerpage);
        setProductsData(productsArr);
        store.url = url;
        console.log(productsArr);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [url]);

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
