import React from "react";
import { TodoList } from "./todo-list";
import { Header } from "./header";
import { BtnAddList } from "./btn-add-list";
import "./lists.css"

export const Lists = () => {
  const todoData = [
    { label: "Общие", important: false, id: 1 },
    { label: "Купить", important: true, id: 2 },
    { label: "День Рождения", important: false, id: 3 },
  ];

  return (
    <div className="lists">
      <Header />
      <div className="all-lists">
        <TodoList todos={todoData} />
      </div>
      <BtnAddList />
    </div>
  );
};
