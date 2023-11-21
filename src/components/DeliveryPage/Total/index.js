import classes from "./Total.module.scss";
import store from "../../../store/Products";
import { toJS } from "mobx";

function Total() {
  const getCorrectWord = (quantity) => {
    if (quantity >= 20) getCorrectWord(quantity % 10);
    if (quantity === 1) return "продукт";
    if (quantity > 1 && store.cartQuantity < 5) return "продукти";
    if (quantity >= 5 || quantity === 0) return "продуктів";
  };

  const message = getCorrectWord(store.cartQuantity);
  const basketData = toJS(store.basket);
  const basketList = basketData.map((product, index) => (
    <diV className={classes.item_container}>
      <div className={classes.item_name}>{product.name}</div>
      <div className={classes.item_quantity}>
        {product.price * product.quantity}
      </div>
    </diV>
  ));

  return (
    <div className={classes.total_container}>
      <div className={classes.quantity_products}>
        {store.cartQuantity} {message}
      </div>
      {basketList}
      <div className={classes.total_price}>
        <div className={classes.total_caption}>Загальна сума</div>
        <div>{store.calculateTotalPrice()}</div>
      </div>
    </div>
  );
}

export default Total;
