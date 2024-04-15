import MobilePagination from "./MobilePagination";
import DesctopPagination from "./DesctopPagination";
import { useMediaQuery } from "react-responsive";

const Pagination = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <MobilePagination /> : <DesctopPagination />;
};

export default Pagination;
