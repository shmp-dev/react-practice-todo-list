import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";

export const App = () => {
  // TODOテキストのステート
  const [todoText, setTodoText] = useState("");
  // 未完了TODOリストの配列ステート
  const [incompleteList, setIncompleteList] = useState([]);
  // 完了TODOリストの配列ステート
  const [completeList, setCompleteList] = useState([]);

  // TODOテキストインプットの内容をステートに更新
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加ボタン押下時
  const onClickAddButton = () => {
    const newIncompleteList = [...incompleteList, todoText];
    setIncompleteList(newIncompleteList);
    setTodoText("");
  };

  // 削除ボタン押下時
  const onClickDeleteButton = (index) => {
    // 未完了リストから削除
    const newIncompleteList = [...incompleteList];
    newIncompleteList.splice(index, 1);
    setIncompleteList(newIncompleteList);
  };

  // 完了ボタン押下時
  const onClickCompleteButton = (index) => {
    // 未完了リストから削除
    const newIncompleteList = [...incompleteList];
    newIncompleteList.splice(index, 1);
    setIncompleteList(newIncompleteList);
    // 完了リストに追加
    const newCompleteList = [...completeList, incompleteList[index]];
    setCompleteList(newCompleteList);
  };

  // 戻すボタン押下時
  const onClickReturnButton = (index) => {
    // 完了リストから削除
    const newCompleteList = [...completeList];
    newCompleteList.splice(index, 1);
    setCompleteList(newCompleteList);
    // 未完了リストに追加
    const newIncompleteList = [...incompleteList, completeList[index]];
    setIncompleteList(newIncompleteList);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddButton}
      />
      <IncompleteTodos
        incompleteList={incompleteList}
        onClickCompleten={onClickCompleteButton}
        onClickDelete={onClickDeleteButton}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeList.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturnButton(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
