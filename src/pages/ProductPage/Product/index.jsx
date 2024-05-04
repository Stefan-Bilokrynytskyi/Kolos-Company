import MobileProduct from "./MobileProduct";
import DesktopProduct from "./DesktopProduct";
import { useMediaQuery } from "react-responsive";

const Product = ({ product, color }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <MobileProduct product={product} color={color} />
  ) : (
    <DesktopProduct product={product} color={color} />
  );
};

export default Product;
