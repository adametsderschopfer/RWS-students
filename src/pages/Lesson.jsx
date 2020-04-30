import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import Axios from "axios";

import { storage } from "../firebase";
import Loading from "../components/loading/Loading";

const now = moment();
moment.locale("ru");

const Lesson = ({ lessName }) => {
  const [addTask, setAddTask] = useState(false);
  const [AddHomeTask, setAddHomeTask] = useState(false);
  const [Disable, setDisable] = useState(false);
  const [taskDate] = useState(now.format("MM.DD.YYYY"));
  const [taskDay] = useState(now.format("dddd"));
  const [Task, setTask] = useState([]);
  const [HomeTask, setHomeTask] = useState([]);
  const [taskDescription, setTaskDescription] = useState("");
  const [setProgress] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("");

  const [isVloj, setIsVloj] = useState(false);
  const [Image, setImage] = useState(null);
  
  const handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
      setIsVloj(true);
    }
  };

  const addTaskInDb = (till, e, permission) => {
    e.preventDefault();
    setDisable(true);

    if (localStorage.getItem("children")) {
      if (!isVloj) {
        return Axios.post(
          `https://school11b.firebaseio.com/clss/${localStorage.getItem(
            "ChooseClass"
          )}/Lessons/${lessName}/${till}.json`,
          [
            {
              taskDescription,
              taskDate,
              taskDay,
              ThemeForYouDoHT: currentTheme,
              taskName: localStorage.getItem("UserName")
            }
          ]
        ).then(r => {
          console.log(`r`, r);
          setAddTask(false);
          if (!localStorage.getItem("teacher")) {
            localStorage.setItem("isDZ", "current");
          }
          return window.location.reload();
        });
      }

      try {
        const uploadTask = storage.ref(`images/${Image.name}`).put(Image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(Image.name)
              .getDownloadURL()
              .then(url => {
                if (url) {
                  return Axios.post(
                    `https://school11b.firebaseio.com/clss/${localStorage.getItem(
                      "ChooseClass"
                    )}/Lessons/${lessName}/${till}.json`,
                    [
                      {
                        taskDescription,
                        taskDate,
                        taskDay,
                        ThemeForYouDoHT: currentTheme,
                        taskfile: url,
                        taskName: localStorage.getItem("UserName")
                      }
                    ]
                  ).then(r => {
                    console.log(`r`, r);
                    setAddTask(false);
                    if (!localStorage.getItem("teacher")) {
                      localStorage.setItem("isDZ", "current");
                    }
                    return window.location.reload();
                  });
                }
              });
          }
        );
      } catch (e) {
        console.error(e);
      }
    } else {
      return Axios.post(
        `https://school11b.firebaseio.com/clss/${localStorage.getItem(
          "ChooseClass"
        )}/Lessons/${lessName}/${till}.json`,
        [
          {
            taskDescription,
            taskDate,
            taskDay
          }
        ]
      ).then(r => {
        console.log(`r`, r);
        setAddTask(false);
        if (!localStorage.getItem("teacher")) {
          localStorage.setItem("isDZ", "current");
        }
        return window.location.reload();
      });
    }
  };

  useEffect(() => {
    localStorage.getItem("ChooseClass") &&
      Axios.get(
        `https://school11b.firebaseio.com/clss/${localStorage.getItem(
          "ChooseClass"
        )}/Lessons/${lessName}.json`
      ).then(r => {
        setTask(r.data.tasks);
        setHomeTask(r.data.homeTask);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!localStorage.getItem("password")) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-2">
      <header className="header">
        <div className="header_wrap">
          <div className="header_wrap_LessName">
            {localStorage.getItem("isLessonName")}
          </div>
          <div className="header_wrap_btns">
            {!localStorage.getItem("isDZ") ? (
              <NavLink
                to={"/"}
                className="back"
                onClick={() => {
                  localStorage.removeItem("isLessonName");
                  localStorage.removeItem("isDZ");
                }}
              >
                Назад к урокам
              </NavLink>
            ) : (
              <div
                className="back"
                onClick={() => {
                  localStorage.removeItem("isDZ");
                  return window.location.reload();
                }}
              >
                Назад к заданиям
              </div>
            )}
          </div>
        </div>
      </header>
      {!localStorage.getItem("isDZ") ? (
        <div className="AllTaskView">
          {Task ? (
            Object.keys(Task).map((i, index) => {
              return Task[i].map(i => (
                <div className="SomethingTask" key={index}>
                  <div className="SomethingTask_Date center">{i.taskDate}</div>
                  <div className="SomethingTask_day center">{i.taskDay}</div>
                  <div className="SomethingTask_description">
                    {i.taskDescription}
                  </div>
                  {localStorage.getItem("teacher") ? (
                    <div
                      className="SomethingTask_viewHT center"
                      onClick={() => {
                        localStorage.setItem("isDZ", "current");
                        return window.location.reload();
                      }}
                    >
                      Проверить ДЗ
                    </div>
                  ) : localStorage.getItem("children") ? (
                    <div
                      className="SomethingTask_viewHT center"
                      onClick={() => {
                        if (!AddHomeTask) setAddHomeTask(true);
                        else setAddHomeTask(false);
                        let currentTaskTheme = i.taskDescription;
                        setCurrentTheme(currentTaskTheme);
                      }}
                    >
                      Сдать ДЗ
                    </div>
                  ) : null}
                </div>
              ));
            })
          ) : (
            <div className="NotFoundTasks">Заданий пока нет</div>
          )}
        </div>
      ) : (
        <div className="AllTaskView">
          {HomeTask ? (
            Object.keys(HomeTask).map((i, index) => {
              return HomeTask[i].map(i => (
                <div className="SomethingTask" key={index}>
                  <div className="SomethingTask_Date center">{i.taskDate}</div>
                  <div className="SomethingTask_day center">{i.taskDay}</div>
                  <div className="SomethingTask_day taskname center">
                    {i.taskName}
                  </div>
                  <div className="SomethingTask_description">
                    <div className="TaskFor">
                      <span className="ThemeForYouDoHTName">
                        Выполняемое задание: &nbsp;
                      </span>
                      <span className="ThemeForYouDoHT">
                        {String(i.ThemeForYouDoHT).length > 60
                          ? String(i.ThemeForYouDoHT).substr(0, 55) + "..."
                          : i.ThemeForYouDoHT}
                      </span>
                    </div>
                    <div>{i.taskDescription}</div>
                  </div>
                  {i.taskfile && (
                    <a
                      href={i.taskfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="SomethingTask_viewHT center"
                    >
                      Посмотреть вложения
                    </a>
                  )}
                </div>
              ));
            })
          ) : (
            <div className="NotFoundTasks">Выполненых заданий пока нет</div>
          )}
        </div>
      )}

      <div className="AddTeachTask">
        {AddHomeTask && (
          <div className="AddTaskModal">
            <div className="Modal">
              <div
                className="Modal_close"
                onClick={() => setAddHomeTask(false)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L2 20"
                    stroke="#2881FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 2L20 20"
                    stroke="#2881FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="header_wrap_LessName">
                {localStorage.getItem("isLessonName")}
              </div>
              {Disable && (
                <Loading>
                  Добавления задания <br />
                  Это может занять некоторое время
                  <br /> (Не выключайте и не перезагружайте страницу)
                </Loading>
              )}
              <form
                className="taskForm"
                onSubmit={e => addTaskInDb("homeTask", e, "children")}
                encType="multipart/form-data"
              >
                <div className="wrapTextarea">
                  <textarea
                    placeholder="Содержание задания"
                    onChange={e => setTaskDescription(e.target.value)}
                    autoFocus
                  ></textarea>

                  <div className="formFile">
                    <label htmlFor="files" className="addFileHomeTask">
                      Прикрепить файл домашней работы&nbsp;
                      {Image && (
                        <div className="blocked">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      )}
                      <svg
                        width="23"
                        height="27"
                        viewBox="0 0 23 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.3976 0.155938C15.2738 0.0255434 15.1041 -0.0527344 14.9282 -0.0527344H4.39549C2.45194 -0.0527344 0.847656 1.54516 0.847656 3.48851V23.4059C0.847656 25.3494 2.45194 26.9473 4.39549 26.9473H18.6911C20.6346 26.9473 22.2389 25.3494 22.2389 23.4059V7.59067C22.2389 7.42114 22.1606 7.2582 22.0498 7.13419L15.3976 0.155938ZM15.5867 2.24945L20.0412 6.92552H17.1455C16.2846 6.92552 15.5867 6.2342 15.5867 5.37335V2.24945ZM18.6911 25.643H4.39549C3.17601 25.643 2.15201 24.6321 2.15201 23.4059V3.48851C2.15201 2.26902 3.16942 1.25162 4.39549 1.25162H14.2824V5.37335C14.2824 6.95807 15.5608 8.22987 17.1455 8.22987H20.9345V23.4059C20.9345 24.6321 19.9171 25.643 18.6911 25.643Z"
                          fill="#FFBB69"
                        />
                        <path
                          d="M16.9104 21.1431H6.17561C5.81698 21.1431 5.52344 21.4364 5.52344 21.7952C5.52344 22.1539 5.81698 22.4474 6.17561 22.4474H16.917C17.2756 22.4474 17.5691 22.1539 17.5691 21.7952C17.5691 21.4364 17.2756 21.1431 16.9104 21.1431Z"
                          fill="#FFBB69"
                        />
                        <path
                          d="M11.0673 18.8017C11.1913 18.9321 11.3609 19.0103 11.5434 19.0103C11.7261 19.0103 11.8956 18.9321 12.0194 18.8017L15.8412 14.6995C16.089 14.4385 16.0695 14.0212 15.8087 13.78C15.5477 13.5321 15.1303 13.5515 14.8891 13.8125L12.1955 16.7016V9.57994C12.1955 9.2211 11.902 8.92776 11.5434 8.92776C11.1847 8.92776 10.8912 9.2211 10.8912 9.57994V16.7016L8.2042 13.8125C7.95639 13.5517 7.54544 13.5321 7.28465 13.78C7.02386 14.0278 7.00429 14.4387 7.2521 14.6995L11.0673 18.8017Z"
                          fill="#FFBB69"
                        />
                      </svg>
                    </label>

                    {Image && (
                      <div className="fileName">
                        <svg
                          width="23"
                          height="27"
                          viewBox="0 0 23 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.3976 0.155938C15.2738 0.0255434 15.1041 -0.0527344 14.9282 -0.0527344H4.39549C2.45194 -0.0527344 0.847656 1.54516 0.847656 3.48851V23.4059C0.847656 25.3494 2.45194 26.9473 4.39549 26.9473H18.6911C20.6346 26.9473 22.2389 25.3494 22.2389 23.4059V7.59067C22.2389 7.42114 22.1606 7.2582 22.0498 7.13419L15.3976 0.155938ZM15.5867 2.24945L20.0412 6.92552H17.1455C16.2846 6.92552 15.5867 6.2342 15.5867 5.37335V2.24945ZM18.6911 25.643H4.39549C3.17601 25.643 2.15201 24.6321 2.15201 23.4059V3.48851C2.15201 2.26902 3.16942 1.25162 4.39549 1.25162H14.2824V5.37335C14.2824 6.95807 15.5608 8.22987 17.1455 8.22987H20.9345V23.4059C20.9345 24.6321 19.9171 25.643 18.6911 25.643Z"
                            fill="#FFBB69"
                          />
                          <path
                            d="M16.9104 21.1431H6.17561C5.81698 21.1431 5.52344 21.4364 5.52344 21.7952C5.52344 22.1539 5.81698 22.4474 6.17561 22.4474H16.917C17.2756 22.4474 17.5691 22.1539 17.5691 21.7952C17.5691 21.4364 17.2756 21.1431 16.9104 21.1431Z"
                            fill="#FFBB69"
                          />
                          <path
                            d="M11.0673 18.8017C11.1913 18.9321 11.3609 19.0103 11.5434 19.0103C11.7261 19.0103 11.8956 18.9321 12.0194 18.8017L15.8412 14.6995C16.089 14.4385 16.0695 14.0212 15.8087 13.78C15.5477 13.5321 15.1303 13.5515 14.8891 13.8125L12.1955 16.7016V9.57994C12.1955 9.2211 11.902 8.92776 11.5434 8.92776C11.1847 8.92776 10.8912 9.2211 10.8912 9.57994V16.7016L8.2042 13.8125C7.95639 13.5517 7.54544 13.5321 7.28465 13.78C7.02386 14.0278 7.00429 14.4387 7.2521 14.6995L11.0673 18.8017Z"
                            fill="#FFBB69"
                          />
                        </svg>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="imgName">{Image.name}</div>
                        </div>
                        <div
                          className="deleteFile"
                          onClick={() => {
                            setIsVloj(false);
                            return setImage(null);
                          }}
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 2L2 20"
                              stroke="#4a94fc"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2 2L20 20"
                              stroke="#4a94fc"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    <input
                      id="files"
                      name="userfile"
                      type="file"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" disabled={Disable}>
                  Сдать Домашнее задание
                </button>
              </form>
            </div>
          </div>
        )}

        {addTask && (
          <div className="AddTaskModal">
            <div className="Modal">
              <div className="Modal_close" onClick={() => setAddTask(false)}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2L2 20"
                    stroke="#2881FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 2L20 20"
                    stroke="#2881FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="header_wrap_LessName">
                {localStorage.getItem("isLessonName")}
              </div>
              {Disable && (
                <Loading>
                  Добавления задания <br />
                  Это может занять некоторое время
                  <br /> (Не выключайте и не перезагружайте страницу)
                </Loading>
              )}
              <form onSubmit={e => addTaskInDb("tasks", e, "teacher")}>
                <textarea
                  autoFocus
                  placeholder="Содержание задания"
                  onChange={e => setTaskDescription(e.target.value)}
                ></textarea>

                <button type="submit" disabled={Disable}>
                  Добавить задание
                </button>
              </form>
            </div>
          </div>
        )}

        {localStorage.getItem("password") === "Karaozek312" && (
          <button
            className="btnAddTask"
            onClick={() => setAddTask(!addTask ? true : false)}
          >
            Добавить новое задание
          </button>
        )}
      </div>
    </div>
  );
};

export default Lesson;
