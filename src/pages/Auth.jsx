import React, { useState } from "react";
import bgAu from "../img/bg.svg";
import bgHum from "../img/bgHum.svg";

const Auth = () => {
  const [passTeacher] = useState("Karaozek312");
  const [inPass, setInPass] = useState("");
  const [inUser, setInUser] = useState("");
  const [oath, setOath] = useState("teacher");
  const [onError, setOnError] = useState(false);
  const [OnChild, setOnChild] = useState(false);

  const [Teacher, setTeacher] = useState(true);
  console.log(`oath`, oath);
  const goTo = () => {
    if (Teacher) {
      if (passTeacher === inPass && (oath === "teacher" || "children")) {
        localStorage.setItem("password", "Karaozek312");
        localStorage.setItem(oath, "-75832nUWemsWRazx!#-");

        return window.location.reload();
      } else if (passTeacher !== parseInt(inPass)) {
        setOnError(true);
        setInPass("");
      }
    } else if (OnChild) {
      if (inUser === "") {
        setOnError(true);
      } else {
        localStorage.setItem("UserName", inUser);
        localStorage.setItem("password", "NotAv");
        localStorage.setItem(oath, "-75832nUWemsWRazx!#-");
        return window.location.reload();
      }
    }
  };

  return (
    <div className="Auth" style={{ backgroundImage: `url(${bgAu})`, backgroundRepeat: 'no-repeat' }}>
      <div className="wrapAuth">
        <div className="title">Караузекская Средняя Школа</div>
        <form
          className="Auth_Form"
          onSubmit={e => {
            e.preventDefault();
            goTo();
          }}
        >
          <div className="Auth_Form_ChoseWho">
            <input
              type="radio"
              name="group1"
              id="r1"
              value="teacher"
              checked={Teacher}
              onChange={e => {
                setOnChild(false);
              }}
            />
            <label
              htmlFor="r1"
              className="lable"
              style={{ color: !OnChild ? "#2881FF" : "#000" }}
              onClick={() => {
                setTeacher(true);
                setOath("teacher");
                setOnChild(false);
              }}
            >
              Учитель
            </label>

            <input
              type="radio"
              name="group1"
              id="r2"
              value="children"
              checked={OnChild}
              onChange={e => {
                setOnChild(true);
              }}
            />
            <label
              htmlFor="r2"
              className="lable"
              style={{ color: OnChild ? "#2881FF" : "#000" }}
              onClick={() => {
                setOath("children");
                setTeacher(false);
                setOnChild(true);
              }}
            >
              Ученик
            </label>
          </div>

          <div className="Auth_Form_FormControls">
            <div className="inpW">
              {OnChild && (
                <input
                  type="text"
                  value={inUser}
                  className="onChild"
                  autoFocus
                  onChange={e => setInUser(e.target.value)}
                  onClick={() => setOnError(false)}
                  placeholder="Имя/Фамилия ученика"
                />
              )}
              {!OnChild ? (
                <input
                  type="password"
                  value={inPass}
                  autoFocus
                  onChange={e => setInPass(e.target.value)}
                  onClick={() => setOnError(false)}
                  placeholder="Пароль"
                />
              ) : null}
            </div>
            <button type="submit">Авторизоваться</button>
            {onError && (
              <span className="onerrAuth">
                Что-то пошло не так! Попробуй еще раз!
              </span>
            )}
          </div>
        </form>
      </div>
      <div className="imgBg">
        <img src={bgHum} alt="" />
      </div>
    </div>
  );
};

export default Auth;
// password
