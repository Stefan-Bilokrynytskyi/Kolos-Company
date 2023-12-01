import React, { useEffect } from "react";
import Header from "../Header";
import classes from "./BasketPage.module.scss";
import BasketList from "./BasketList";
import TotalPrice from "./TotalPrice";
import RecomendationsList from "./RecomendationsList";
import { useState } from "react";
import DeliveryPage from "../DeliveryPage";
import { useParams } from "react-router-dom";

import store from "../../store/Products";
import { useObserver } from "mobx-react-lite";
import EmptyBasket from "./EmptyBasket";

function BasketPage() {
  const [isDeliveryPageSlected, setIsDeliveryPageSlected] = useState(false);

  const toCashierHandler = () => {
    setIsDeliveryPageSlected(true);
  };
  return useObserver(() => (
    <div>
      {isDeliveryPageSlected ? (
        <DeliveryPage />
      ) : (
        <div>
          <Header />
          {store.basket.length === 0 ? (
            <>
              <EmptyBasket />
            </>
          ) : (
            <>
              <BasketList toCashierHandler={toCashierHandler} />
              <TotalPrice />
              <RecomendationsList />            
            </>
          )}
        </div>
      )}
    </div>
  ));
}

export default BasketPage;
