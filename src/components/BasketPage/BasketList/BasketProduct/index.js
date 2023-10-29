import React from "react";
import classes from "./Basket.module.scss";
// import Cross from "../icons/cross.svg";

function BasketProduct() {
  const [count, setCount] = React.useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  };

  const decreaseNumber = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <div>
      <div className={classes.basket}>
        <div className={classes.basket_container}>
          <h1>Кошик</h1>

          <button className={classes.btn}>До касси</button>

          <div className={classes.product_block}>
            {/* Product block */}
            <div className={classes.product}>
              {/* test block (delete later)
              <div className={classes.img}></div> */}

              <div className={classes.product_info}>
                <div className={classes.img}></div>
                
                <div className={classes.info}>
                  <h2>Боді "Каштан"</h2>

                  <div className={classes.product_description}>
                    <p>Колір: Фісташка</p>
                    <p>Розмір: 50</p>
                  </div>
                </div>
              </div>

              <div className={classes.cross}>
                X
              </div>
            </div>

            {/* Increase, decrease */}
            <div className={classes.counter}>
              <div className={classes.operations}>
                <button onClick={increaseNumber}>+</button>
                <span>{count}</span>
                {count > 0 && <button onClick={decreaseNumber}>-</button>}
              </div>

              <div className={classes.price}>1111</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;
