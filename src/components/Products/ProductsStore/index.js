import classes from "./ProductsStore.module.scss";
import { useEffect, useState } from "react";
import store from "../../../store/Products";
import { toJS, autorun } from "mobx";
import ListOfProducts from "./ListOfProducts";
import { observer } from "mobx-react-lite";

const ProductsStore = observer(({ category }) => {
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    console.log("tut");
    const dispose = autorun(() => {
      async function fetchData() {
        if (store.url) {
          try {
            await store.fetchProducts(`${store.url}`);
            const productsArr = toJS(store.productPerpage);
            store.category = category;
            setProductsData(productsArr);
            //store.url = url;
            console.log(productsArr);
          } catch (e) {
            console.log(e);
          }
        } else {
          try {
            await store.fetchProducts(
              `/api/products/${category}/?amount_items=${store.limit}`
            );
            const productsArr = toJS(store.productPerpage);
            store.category = category;
            setProductsData(productsArr);

            console.log(productsArr);
          } catch (e) {
            console.log(e);
          }
        }
      }
      fetchData();
    });
    return () => {
      // Уберите обработчик autorun при размонтировании компонента
      dispose();
    };
  }, [category]);

  return (
    <div className={classes.store_conteiner}>
      {productsData ? (
        <ListOfProducts productsData={productsData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
});

export default ProductsStore;
