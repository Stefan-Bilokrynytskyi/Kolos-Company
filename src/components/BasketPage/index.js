import React, { useEffect } from "react";
import Header from "../Header";
import BasketList from "./BasketList";
import TotalPrice from "./TotalPrice";
import RecomendationsList from "./RecomendationsList";
import { useState } from "react";
import DeliveryPage from "../DeliveryPage";
import store from "../../store/Products";
import { observer } from "mobx-react-lite";
import EmptyBasket from "./EmptyBasket";

const BasketPage = observer(() => {
  const [isDeliveryPageSlected, setIsDeliveryPageSlected] = useState(
    store.isDeliveryPageSelected
  );

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
          {store.basket.length === 0 ? (
            <>
              <EmptyBasket />
            </>
          ) : (
            <>
              <BasketList toCashierHandler={toCashierHandler} />
              {/* <RecomendationsList /> */}
            </>
          )}
        </div>
      )}
    </div>
  );
});

export default BasketPage;
