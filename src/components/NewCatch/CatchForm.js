import React, { useState } from "react";

import "./NewCatch.css";

function CatchForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredLure, setEnteredLure] = useState("");
  const [enteredLenght, setEnteredLenght] = useState("");
  const [enteredWeight, setEnteredWeight] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredNotes, setEnteredNotes] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const catchData = {
      name: enteredName,
      lure: enteredLure,
      length: enteredLenght,
      weight: enteredWeight,
      date: new Date(enteredDate),
      notes: enteredNotes,
    };
    props.onSaveCatchData(catchData);
    setEnteredName("");
    setEnteredLenght("");
    setEnteredWeight("");
    setEnteredLure("");
    setEnteredNotes("");
    setEnteredDate("");
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const lenghtChangeHandler = (event) => {
    setEnteredLenght(event.target.value);
  };
  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };
  const lureChangeHandler = (event) => {
    setEnteredLure(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const notesChangeHandler = (event) => {
    setEnteredNotes(event.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="new-fish__controls">
          <div className="new-fish__control">
            <label htmlFor="">Species</label>
            <select
              id="species"
              value={enteredName}
              onChange={nameChangeHandler}
            >
              <option value="pike">Pike</option>
              <option value="zander">Zander</option>
              <option value="perch">Perch</option>
              <option value="" disabled hidden selected>
                ----
              </option>
            </select>
          </div>
          <div className="new-fish__control">
            <label htmlFor="">Lenght</label>
            <input
              type="number"
              min="10"
              step="1"
              value={enteredLenght}
              onChange={lenghtChangeHandler}
            />
          </div>
          <div className="new-fish__control">
            <label htmlFor="">Weight</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              value={enteredWeight}
              onChange={weightChangeHandler}
            />
          </div>
          <div className="new-fish__control">
            <label htmlFor="">Lure</label>
            <input
              type="text"
              value={enteredLure}
              onChange={lureChangeHandler}
            />
          </div>
          <div className="new-fish__control">
            <label htmlFor="">Date</label>
            <input
              type="date"
              min="2022-01-01"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="new-fish__control">
            <label htmlFor="">Notes</label>
            <textarea
              type="text"
              value={enteredNotes}
              onChange={notesChangeHandler}
            />
          </div>
          <div className="new-fish__actions">
            <button type="submit">Add fish</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CatchForm;
