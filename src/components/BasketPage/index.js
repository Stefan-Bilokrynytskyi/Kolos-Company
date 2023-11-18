import React from "react";
import Header from "../Header";
import classes from "./BasketPage.module.scss";
import BasketList from "./BasketList";
import TotalPrice from "./TotalPrice";
import RecomendationsList from "./RecomendationsList";
import { useState } from "react";
import DeliveryPage from "../DeliveryPage";

function BasketPage() {
  const [isDeliveryPageSlected, setIsDeliveryPageSlected] = useState(false);

  const toCashierHandler = () => {
    setIsDeliveryPageSlected(true);
  };
  return (
    <div>
      {isDeliveryPageSlected ? (
        <DeliveryPage />
      ) : (
        <div>
          <Header />
          <BasketList toCashierHandler={toCashierHandler} />
          <TotalPrice />
          <RecomendationsList />
        </div>
      )}
    </div>
  );
}

export default BasketPage;
