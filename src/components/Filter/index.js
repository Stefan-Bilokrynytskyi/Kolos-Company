import MobileFilter from "./MobileFilter";
import DesctopFilter from "./DesctopFilter";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <MobileFilter /> : <DesctopFilter />;
};

export default Header;
