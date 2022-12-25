import React from "react";
import { ToDoListItem } from "./todo-list-item";
import "./todo-list.css"

export const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        <ToDoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};
