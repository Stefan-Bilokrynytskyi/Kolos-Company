import classes from "./Sections.module.scss";

function SectionButton({ src, alt, isChosen }) {
  return (
    <div className={classes.section}>
      {isChosen && <div className={classes.section_overlay}></div>}
      <img src={src} className={classes.img_section} alt={alt}></img>
    </div>
  );
}

export default SectionButton;
