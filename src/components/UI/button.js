import React from "react";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.description}
    </button>
  );
};

export default Button;
