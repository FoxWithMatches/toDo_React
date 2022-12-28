import React from "react";
import NotesData from "../notes-data";
import ToDoListItem from "../todo-list-item";
import "./todo-list.css";

export const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <button className="list-item">
        <p key={id} className="text-item">
          <ToDoListItem {...itemProps} />
        </p>
        <div className="nav-arrow">
          <p className="num-item">{NotesData.length}</p>
          <div className="arrow"></div>
        </div>
      </button>
    );
  });

  return <div>{elements}</div>;
};
