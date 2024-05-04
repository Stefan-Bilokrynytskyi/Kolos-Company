import Header from "../../components/Header";
import BasketList from "./BasketList";
// import RecomendationsList from "./RecomendationsList";
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
    <>
      {isDeliveryPageSlected ? (
        <DeliveryPage />
      ) : (
        <>
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
        </>
      )}
    </>
  );
});

export default BasketPage;
