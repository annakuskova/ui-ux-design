import React, { useState } from "react";
import minus from "../minus.svg";
import plus from "../plus.svg";
import './Header.css';

export const Task1 = () => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
    console.log(count);
  };

  const onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function pad(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
  }

  return (
    <div className="counter">
      <p>{pad(count)}</p>
      <div>
        <button onClick={onClickMinus} className="counterBtn btnOne">
          <img src={minus} alt="minus" />
        </button>
        <button onClick={onClickPlus} className="counterBtn btnTwo">
          <img src={plus} alt="plus" />
        </button>
      </div>
    </div>
  );
};
