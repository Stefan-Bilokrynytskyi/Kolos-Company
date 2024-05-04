import classes from "./CollectionDescription.module.scss";

function CollectionDescription({ collectionDescription }) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        Колекція "{collectionDescription.name}"
      </div>
      <div className={classes.description}>
        {collectionDescription.description}
      </div>
      <img
        className={classes.image}
        src={collectionDescription.photo_url}
        alt="collection"
      />
    </div>
  );
}

export default CollectionDescription;
