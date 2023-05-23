import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // TODOテキストのステート
  const [todoText, setTodoText] = useState("初期");
  // 未完了TODOリストの配列ステート
  const [incompleteList, setIncompleteList] = useState(["aaaa", "iiii"]);
  // 完了TODOリストの配列ステート
  const [completeList, setCompleteList] = useState(["uuuu"]);

  // TODOテキストインプットの内容をステートに更新
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン押下時
  const onClickAddButton = () => {
    alert("追加");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAddButton}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteList.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeList.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
