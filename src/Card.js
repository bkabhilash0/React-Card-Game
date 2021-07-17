import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.card} onClick={() => setIsOpened((prev) => !prev)}>
      <div
        className={`${classes.face} ${classes.front} ${
          isOpened ? classes.active : ""
        }`}
      >
        <div className="front">
          <h2>{props.index}</h2>
        </div>
      </div>
      <div
        className={`${classes.face} ${classes.back} ${
          isOpened ? classes.active : ""
        }`}
      >
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default Card;
