import classes from "./Sections.module.scss";
import Classic from "../../img/Classic.jpg";
import Casual from "../../img/Casual.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store from "../../store/Products";
import { observer } from "mobx-react-lite";
import CollectionSlider from "../Sections/CollectionSlider";
import Logo2 from "../../icons/logo-2.svg";
import Stripe from "../UI/Stripe";

const Sections = observer(() => {
  const [isChosen, setIsChosen] = useState(false);

  const changeUrlHandler = (url) => {
    store.setGlobalCategory(true);
    store.setUrl(url);
  };

  return (
    <div className={classes.container}>
      <div className={classes.banner}>
        <img src={Logo2} alt="logo" className={classes.logo} />
      </div>
      <div className={classes.sections}>
        <div className={classes.section_conteiner}>
          <Link
            to={`/products/casual/?amount_items=${store.limit}&page=${store.page}`}
            onClick={() =>
              changeUrlHandler(
                `/products/casual/?amount_items=${store.limit}&page=${store.page}`
              )
            }
          >
            <div className={classes.casual}>
              <div className={classes.section_name}>КЕЖУАЛ</div>
            </div>
          </Link>
        </div>

        <div className={classes.section_conteiner}>
          <Link
            to={`/products/classic/?amount_items=${store.limit}&page=${store.page}`}
            onClick={() =>
              changeUrlHandler(
                `/products/classic/?amount_items=${store.limit}&page=${store.page}`
              )
            }
          >
            <div className={classes.classic}>
              <div className={classes.section_name}>КЛАСИКА</div>
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.caption}>
        <div className={classes.name_container}>
          <div className={classes.name}>КОЛЕКЦІЇ</div>
          <Stripe
            customStyles={{
              backgroundColor: "black",
              left: "0",
              bottom: "50%",
              transform: "translate(0, 50%)",
              zIndex: "-1",
              width: "100%",
            }}
          />
        </div>
      </div>
      <CollectionSlider />
    </div>
  );
});

export default Sections;
