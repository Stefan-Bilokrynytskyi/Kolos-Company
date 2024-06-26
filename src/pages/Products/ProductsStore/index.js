import classes from "./ProductsStore.module.scss";
import { useEffect, useState } from "react";
import store from "../../../store/Products";
import { toJS, autorun } from "mobx";
import ListOfProducts from "../../../components/ListOfProducts";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { action } from "mobx";
import Pagination from "../../../components/Pagination";
import Loading from "../../../components/Loading";

const ProductsStore = observer(({ category }) => {
  const [productsData, setProductsData] = useState(null);
  const location = useLocation();
  const { pathname, search } = location;
  const currentUrl = (pathname + search).replace(
    `https://kolos-api-prod.onrender.com/api`,
    ""
  );

  const searchParams = new URLSearchParams(location.search);
  let currentPage = searchParams.get("page");

  if (!currentPage) currentPage = 1;
  const setCurrentPageHandler = action((page) => {
    store.setCurrentPage(page);
    store.setUrl(currentUrl);
  });

  useEffect(() => {
    setCurrentPageHandler(currentPage);
    const dispose = autorun(() => {
      async function fetchData() {
        try {
          setProductsData(null);
          await store.fetchProducts(`/api${store.url}`);
          const productsArr = toJS(store.productPerpage);

          setProductsData(productsArr);
        } catch (e) {
          console.log(e);
        }
      }
      fetchData();
    });
    return () => {
      dispose();
    };
  }, [category, currentPage, currentUrl]);

  return (
    <div className={classes.store_conteiner}>
      {productsData ? (
        <>
          <ListOfProducts productsData={productsData} />
          <Pagination setProductsData={setProductsData} />
        </>
      ) : (
        <Loading isLoading={!productsData} />
      )}
    </div>
  );
});

export default ProductsStore;
