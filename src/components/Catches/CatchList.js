import React from "react";
import CatchItem from "./CatchItem";

const CatchList = (props) => {
  return (
    <div className="catch-list">
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
  );
};

export default CatchList;
