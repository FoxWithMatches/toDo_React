import React from "react";
import ToDoListItem from "../todo-list-item";
import "./todo-list.css";

export const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-item">
        <p className="text-item">
          <ToDoListItem {...itemProps} />
        </p>
        <div className="nav-arrow">
          <p className="num-item"></p>
          <div className="arrow"></div>
        </div>
      </li>
    );
  });

  return <ul className="all-notes">{elements}</ul>;
};
