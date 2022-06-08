import React from "react";
import CatchForm from "./CatchForm";

const NewCatch = (props) => {
  const saveCatchDataHandler = (enteredCatchData) => {
    const catchData = {
      ...enteredCatchData,
      id: Math.random().toString(),
    };
    props.onAddCatch(catchData);
  };
  return (
    <div className="new-catch">
      <CatchForm onSaveCatchData={saveCatchDataHandler}></CatchForm>
    </div>
  );
};

export default NewCatch;
