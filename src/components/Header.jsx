import React, { useState } from "react";
import "./Header.css";
import vector from "../Vector.png";
import minus from '../minus.svg';
import plus from '../plus.svg';

export const Header = () => {
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
    <>
      <div className="frame">
        <img src={vector} alt="vector" className="vector" />
        <div className="header">
          <ul>
            <li>
              <a href="#">Task 1</a>
            </li>
            <li>
              <a href="#">Task 2</a>
            </li>
            <li>
              <a href="#">Task 3</a>
            </li>
            <li>
              <a href="#">Task 4</a>
            </li>
          </ul>
        </div>
        <div className="block-left">
          <h1>UI/UX design</h1>
          <div></div>
          <div></div>
          <p>4 course</p>
          <div></div>
          <div></div>
          <p className="task-name">Counter</p>
          <div className="counter">
            <p>{pad(count)}</p>
            <div>
              <button onClick={onClickMinus} className="counterBtn btnOne">
                <img src={minus} alt="minus" />
              </button>
              <button onClick={onClickPlus} className="counterBtn btnTwo">
                <img src={plus} alt='plus' />
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
