/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import List from "../components/List/List";
import Close from "../components/Close";
import WhatAreWont from "../components/WhatAreWont/WhatAreWont";

const Home = () => {
  if (!localStorage.getItem("password")) {
    return window.location.reload();
  }

  return (
    <Fragment>
      <header className="header">
        <div className="header_wrap">
          <div className="header_wrap_wr">
            <span>{localStorage.getItem("className")} “Б” Класс </span>
          </div>
         <div className="clsWr">
         <div
            className="dopChose"
            onClick={() => {
              localStorage.removeItem("ChooseClass");
              localStorage.removeItem("className");
              return window.location.reload();
            }}
          >
            Выбрать класс
          </div>
          <Close>Выход</Close>
         </div>
        </div>
      </header>
      <List />
      {/* <WhatAreWont /> */}
    </Fragment>
  );
};

export default Home;
