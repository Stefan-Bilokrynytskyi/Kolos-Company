import classes from "./DeliveryPage.module.scss";
import DeliveryHeader from "./DeliveryHeader";
import PageCaption from "../UI/PageCaption";
import DeliveryForm from "./DeliveryForm";
import PresentOffer from "./PresentOffer";
import Total from "./Total";
import Button from "../UI/Button";

function DeliveryPage() {
  return (
    <div>
      <DeliveryHeader />
      <div className={classes.delivery_container}>
        <PageCaption caption="Доставка" />
        <DeliveryForm />
        <PresentOffer />
        <Total />
        <Button>До оплати</Button>
      </div>
    </div>
  );
}

export default DeliveryPage;
