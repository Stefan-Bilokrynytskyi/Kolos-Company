import classes from "./DeliveryPage.module.scss";
import DeliveryHeader from "./DeliveryHeader";
import PageCaption from "../../components/UI/PageCaption";
import DeliveryForm from "./DeliveryForm";
import PresentOffer from "./PresentOffer";
import Total from "./Total";
import Button from "../../components/UI/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useMediaQuery } from "react-responsive";

function DeliveryPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const btnStyles = isMobile
    ? { marginTop: "1.25rem" }
    : {
        marginTop: "1.25rem",
        height: "3.25rem",
        fontSize: "1.875rem",
      };
  return (
    <>
      {isMobile ? <DeliveryHeader /> : <Header />}
      <div className={classes.delivery_container}>
        <PageCaption caption="Доставка" />
        <div className={classes.form_container}>
          <DeliveryForm>
            <PresentOffer />
            <Total />

            <Button customStyles={btnStyles}>До оплати</Button>
          </DeliveryForm>
        </div>
      </div>
      {!isMobile && <Footer />}
    </>
  );
}

export default DeliveryPage;
