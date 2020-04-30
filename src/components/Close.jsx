import React from "react";

export default function Close(props) {
  return (
    <div
      to={'/'}
      className="closeInSustem"
      onClick={() => {
        localStorage.removeItem("password");
        localStorage.removeItem("teacher");
        localStorage.removeItem("children");
        localStorage.removeItem("ChooseClass");
        localStorage.removeItem("className");
        localStorage.removeItem("UserName");

        return window.location.reload();
      }}
    >
      {props.children}
    </div>
  );
}
