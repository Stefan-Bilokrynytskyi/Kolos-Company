import classes from "./CollectionStore.module.scss";
import { useEffect, useState } from "react";
import store from "../../../store/Products";
import { toJS, autorun } from "mobx";
import ListOfProducts from "../../ListOfProducts";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";
import { action } from "mobx";
import CollectionDescription from "./CollectionDescription";
import Loading from "../../Loading";

const CollectionStore = observer(({ category }) => {
  const [productsData, setProductsData] = useState(null);
  const [collectionDescription, setCollectionDescription] = useState(null);
  const location = useLocation();
  const { pathname, search } = location;
  const currentUrl = (pathname + search).replace(
    `https://kolos-api-prod.onrender.com/api/`,
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
          console.log(store.url);
          await store.fetchCollectionProducts(`/api${store.url}`);
          const productsArr = toJS(store.productPerpage);
          const collectionDescription = toJS(store.collectionDescription);
          setCollectionDescription(collectionDescription);
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
  }, [currentPage, currentUrl]);

  return (
    <div className={classes.store_conteiner}>
      {productsData ? (
        <div>
          <CollectionDescription
            collectionDescription={collectionDescription}
          />
          <ListOfProducts productsData={productsData} />
        </div>
      ) : (
        <Loading isLoading={!productsData} />
      )}
    </div>
  );
});

export default CollectionStore;
