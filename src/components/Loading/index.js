import classes from "./Loading.module.scss";
import PropagateLoader from "react-spinners/PropagateLoader";
function Loading(props) {
  return (
    <div className={classes.loader_container}>
      <PropagateLoader
        color={"#0D2C1A"}
        loading={props.isLoading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
