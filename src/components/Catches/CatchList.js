import React from "react";
import CatchItem from "./CatchItem";
import classes from "./CatchList.module.css";

const CatchList = (props) => {
  return (
    <div className={classes["catch-list-container"]}>
      <h2 className={classes["catch-list-header"]}>Your list of catches:</h2>
      <div className={classes["catch-list"]}>
        {props.items.map((fish) => (
          <CatchItem
            key={fish.id}
            name={fish.name}
            lenght={fish.lenght}
            weight={fish.weight}
            lure={fish.lure}
            date={fish.date}
            notes={fish.notes}
          ></CatchItem>
        ))}
      </div>
    </div>
  );
};

export default CatchList;
