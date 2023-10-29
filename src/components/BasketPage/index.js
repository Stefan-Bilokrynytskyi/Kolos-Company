import React from "react";
import Header from "../Header";
import classes from "./BasketPage.module.scss";
import BasketList from "./BasketList";
import Recomendations from "./Recomendations";

function BasketPage() {
  return (
    <div>
      <Header />
      <BasketList />
      <Recomendations />
    </div>
  );
}

export default BasketPage;
