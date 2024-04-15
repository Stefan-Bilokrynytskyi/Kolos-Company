import classes from "./CategoriesMenu.module.scss";
import Dropdown from "./Dropdown";
import { useState } from "react";

const DesktopHeader = ({ accordionSections }) => {
  const [sections, setSections] = useState(
    accordionSections.map((section) => ({ ...section, isSelected: false }))
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
    <div className={classes.accordion_container}>
      {sections.map((section) => (
        <Dropdown
          name={Object.keys(section)[0]}
          listMenu={section[Object.keys(section)[0]]}
          key={Object.keys(section)[0]}
          isOpen={section.isSelected}
          setIsOpen={() => closeMenuHandler(section)}
        />
      ))}
    </div>
  );
};

export default DesktopHeader;
