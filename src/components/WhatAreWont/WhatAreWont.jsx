import React, { useState, useEffect } from "react";
import Axios from "axios";

const WhatAreWont = () => {
  const [commentName, setCommentName] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [Comments, setComments] = useState({});
  const [Disable, setDisable] = useState(false);

  const onAddComment = e => {
    setDisable(true);
    e.preventDefault();
    Axios.post(
      `https://school11b.firebaseio.com/Comments.json`,
      [
        {
          commentName,
          commentContent,
          status: localStorage.getItem("teacher")
            ? ": Учитель"
            : localStorage.getItem("children")
            ? ": Ученик"
            : null,
          date: new Date()
        }
      ]
    ).then(r => {
      Axios.get(
        `https://school11b.firebaseio.com/Comments.json`
      ).then(r => r.data && setComments(r.data));
      setCommentName("");
      setCommentContent("");
      setDisable(false);
    });
  };

  useEffect(() => {
    Axios.get(
      `https://school11b.firebaseio.com/Comments.json`
    ).then(r => r.data && setComments(r.data));
  }, []);

  return (
    <div className="WhatAreWont">
      <h1>Комментарии</h1>
      <h3>Всего коментариев:&nbsp; {Object.keys(Comments).length} </h3>

      <form className="WhatAreWont_Form" onSubmit={e => onAddComment(e)}>
        <input
          type="text"
          value={commentName}
          onChange={e => setCommentName(e.target.value)}
          placeholder="Имя"
        />
        <textarea
          value={commentContent}
          onChange={e => setCommentContent(e.target.value)}
          placeholder="Коментарий"
        ></textarea>
        <button disabled={commentName === "" || Disable ? true : false}>
          Добавить
        </button>
      </form>

      <div className="AllComments">
        {Object.keys(Comments).map(r =>
          Comments[r].map((r, i) => {
            return (
              <div key={i} className="Comment">
                <div className="wrap-3">
                  <div className="Comment_name">
                    {r.commentName} {r.status}
                  </div>
                  <span className="date">{r.date}</span>
                </div>
                <div className="Comment_content">
                  {r.commentContent === "" ? (
                    <span style={{ color: "#dfdfdf" }}>Пустой коментарий</span>
                  ) : (
                    r.commentContent
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WhatAreWont;
