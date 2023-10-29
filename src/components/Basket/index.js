import React from "react";
import Header from "../Header";
import classes from "../Basket/Basket.module.scss" 

function Basket() {
  const [count, setCount] = React.useState(0);

  const increaseNumber = () => {
    setCount(count + 1);
  }

  const decreaseNumber = () => {
    setCount(Math.max(count - 1, 0));
  }

  return (
    <>
      <Header />

      <div className={classes.basket}>
        <div className={classes.basket_container}>
          <h1>Кошик</h1>

          <button>До касси</button>

          <div className={classes.product_block}>
            {/* Product block */}
            <div className={classes.product}>
              <img />

              <div className={classes.product_info}>
                <h2>Боді "Каштан"</h2>

                <div className={classes.product_description}>
                  <p>Колір: Фісташка</p>
                  <p>Розмір: 50</p>
                </div>
              </div>
              
              <div className={classes.cross}>

              </div>
            </div>

            {/* Increase, decrease */}
            <div className={classes.counter}> 
              <div className={classes.operations}>
                  <button onClick={increaseNumber}>+</button>
                  <span>{count}</span>
                  {count > 0 && (
                    <button onClick={decreaseNumber}>-</button>
                  )}
              </div>
              
              <div className={classes.price}>
                1111
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basket;