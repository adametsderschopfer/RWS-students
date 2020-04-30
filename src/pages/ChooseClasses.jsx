import React, { useState } from "react";
import Axios from "axios";
import Close from "../components/Close";

const ChooseClasses = () => {
  const [classes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [disb, setdisb] = useState(false);

  return (
    <React.Fragment>
      <div className="ChooseClasses">
        <div className="classCont">
          <div className="rowCh">
            <h1>Выберите класс</h1>
            <Close>Выход</Close>
          </div>
          <div className="wrapClasses">
            {classes.map((item, index) => (
              <button
                key={index}
                value={item + "IsClass"}
                disabled={disb}
                onClick={e => {
                  setdisb(true);
                  localStorage.setItem("ChooseClass", e.target.value);

                  Axios.get(
                    `https://school11b.firebaseio.com/clss/${e.target.value}.json`
                  ).then(r => {
                    localStorage.setItem("className", r.data.className);
                    return window.location.reload();
                  });
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChooseClasses;
