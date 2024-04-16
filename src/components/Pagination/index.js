import MobilePagination from "./MobilePagination";
import DesctopPagination from "./DesctopPagination";
import { useMediaQuery } from "react-responsive";

const Pagination = ({ setProductsData }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <MobilePagination />
  ) : (
    <DesctopPagination setProductsData={setProductsData} />
  );
};

export default Pagination;
