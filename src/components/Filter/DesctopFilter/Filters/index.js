import Dropdown from "../../../Dropdown";
import PriceSlider from "../../../PriceSlider";
import { useState } from "react";
import classes from "./Filters.module.scss";

const FILTERS = ["Ціна", "Стать", "Розмір"];

const Filters = () => {
  const [sections, setSections] = useState(
    FILTERS.map((filter) => ({ filter, isSelected: false }))
  );

  const closeMenuHandler = (section) => {
    const newSections = sections.map((el) => {
      if (el !== section) {
        return { ...el, isSelected: false };
      }
      return { ...el, isSelected: !el.isSelected };
    });
    setSections(newSections);
  };

  return (
    <div className={classes.filters_container}>
      {sections.map((section, index) => (
        <Dropdown
          name={section.filter}
          key={section.filter + index}
          isOpen={section.isSelected}
          setIsOpen={() => closeMenuHandler(section)}
        >
          <PriceSlider />
        </Dropdown>
      ))}
    </div>
  );
};

export default Filters;
