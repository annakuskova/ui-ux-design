import React from "react";
import "./Header.css";
import vector from "../Vector.png";
import { Outlet, Link } from "react-router-dom";


export const Header = () => {
  

  return (
    <>
      <div className="frame">
        <img src={vector} alt="vector" className="vector" />
        <div className="header">
          <ul>
            <li>
              <Link to="/">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
            <li>
              <Link to="/task3">Task 3</Link>
            </li>
            <li>
              <Link to="/task4">Task 4</Link>
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

          <Outlet />

          <div></div>
        </div>
      </div>


    </>
  );
};
