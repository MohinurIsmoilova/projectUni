import React from "react";
import { NavLink } from "react-router-dom";

export const AppBar = () => {
  return (
    <>
      <div className="container">
        <div className="pt-10">
          <ul className="flex space-x-5">
            <li>
              <NavLink
                to="/expert"
                className="hover:bg-blue-100 p-4 text-2xl hover:text-blue-600"
              >
                Эксперт
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/polzov"
                className="hover:bg-blue-100 p-4 text-2xl hover:text-blue-600"
              >
                Пользователь
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
