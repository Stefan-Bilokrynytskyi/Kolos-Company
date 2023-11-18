import classes from "./DeliveryPage.module.scss";
import DeliveryHeader from "./DeliveryHeader";
import PageCaption from "../UI/PageCaption";
import DeliveryForm from "./DeliveryForm";

function DeliveryPage() {
  return (
    <div>
      <DeliveryHeader />
      <div className={classes.delivery_container}>
        <PageCaption caption="Доставка" />
        <DeliveryForm />
      </div>
    </div>
  );
}

export default DeliveryPage;
