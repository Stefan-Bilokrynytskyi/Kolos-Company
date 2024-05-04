import React from "react";
import { useNavigate } from "react-router-dom";
import buybasket from "../../../icons/buybasket.svg";
import classes from "../EmptyBasket/EmptyBasket.module.scss";
import Button from "../../../components/UI/Button";

function EmptyBasket() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={classes.Empty_Basket}>
        <div className={classes.buy_basket}>
          <div className={classes.buy_basket_block}>
            <img src={buybasket} />
            <h2>Кошик порожній</h2>
            <p>Перегляньте наші новинки і оновіть свій гардероб</p>
          </div>

          <div className={classes.button}>
            <Button onClick={goBack} customStyles={{ marginBottom: "25px" }}>
              До покупок
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyBasket;
