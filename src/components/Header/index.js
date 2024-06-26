import MobileHeader from "./mobileHeader";
import DesctopHeader from "./desctopHeader";
import { useMediaQuery } from "react-responsive";

const Header = ({ ...props }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <MobileHeader {...props} /> : <DesctopHeader />;
};

export default Header;
