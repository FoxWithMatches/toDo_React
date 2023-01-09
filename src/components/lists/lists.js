import React from "react";
import TodoList from "../todo-list";
import Header from "../header";
import BtnAddList from "../btn-add-list";
import Input from "../notes-input";
import "./lists.css";

export const Lists = () => {
  const listData = [
    { label: "Общие", important: false, id: 1 },
  ];

  return (
    <div className="lists">
      <Header title={"Заметки"}/>
      <div className="all-lists">
        <TodoList todos={listData} />
      </div>
      <Input placeholder={"Новый список"}/>
      <BtnAddList />
    </div>
  );
};
