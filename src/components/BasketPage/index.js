import React from "react";
import Header from "../Header";
import classes from "./BasketPage.module.scss";
import BasketList from "./BasketList";
import TotalPrice from "./TotalPrice";
import RecomendationsList from "./RecomendationsList";

function BasketPage() {
  return (
    <div>
      <Header />
      <BasketList />
      <TotalPrice />
      <RecomendationsList />
    </div>
  );
}

export default BasketPage;
