import Header from "../../components/Header";
import Footer from "../../components/Footer";
import classes from "./CollectionProducts.module.scss";
import CollectionStore from "./CollectionStore";
import Filter from "../../components/Filter";
import store from "../../store/Products";

function CollectionProducts() {
  const currentUrl = window.location.href;

  // Find the index of "/collection-items"
  const collectionItemsIndex = currentUrl.indexOf("/collection-items");

  // Set the URL in the MobX store, starting from "/collection-items" onwards
  store.setUrl(currentUrl.slice(collectionItemsIndex));

  console.log(store.url);
  return (
    <div className={classes.products_page}>
      <Header />
      <Filter name={"Фільтр"} />
      <CollectionStore />
      <Footer />
    </div>
  );
}

export default CollectionProducts;
