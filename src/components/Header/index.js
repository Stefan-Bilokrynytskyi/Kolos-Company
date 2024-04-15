import MobileHeader from "./mobileHeader";
import DesctopHeader from "./desctopHeader";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <MobileHeader /> : <DesctopHeader />;
};

export default Header;
