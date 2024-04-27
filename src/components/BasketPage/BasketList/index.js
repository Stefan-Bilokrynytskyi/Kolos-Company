import MobileBasketList from "./MobileBasketList";
import DesktopCartList from "./DesktopCartList";

import { useMediaQuery } from "react-responsive";

const BasketList = ({ toCashierHandler }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <MobileBasketList toCashierHandler={toCashierHandler} />
  ) : (
    <DesktopCartList toCashierHandler={toCashierHandler} />
  );
};

export default BasketList;
