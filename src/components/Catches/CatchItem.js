import CatchDate from "./CatchDate";
import classes from "./CatchItem.module.css";

function CatchItem(props) {
  return (
    <div className={classes["catch-item"]}>
      <h2>{props.name}</h2>
      <div className={classes.container}>
        <div className={classes["catch-item__photo"]}>IMG</div>
        <div className={classes["catch-item__description"]}>
          <div>
            <label htmlFor="">lenght: </label>
            <span>{props.lenght} cm</span>
          </div>
          <div>
            <label htmlFor="">weight: </label>
            <span>{props.weight} kg</span>
          </div>
          <div>
            <label htmlFor="">lure: </label>
            <span>{props.lure}</span>
          </div>
          <CatchDate date={props.date} />
          <div>
            <label htmlFor="">notes: </label>
            <span>{props.notes}</span>
          </div>
          <div>
            <label htmlFor="">weather: </label>
            <span>{}</span>
          </div>
          <div>
            <label htmlFor="">place: </label>
            <span>{}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatchItem;
