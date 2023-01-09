import React from "react";
import ToDoNotesItem from "../todo-notes-item";
import "./todo-notes.css";

export const NotesList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="notes-item">
        <ToDoNotesItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="all-lists">{elements}</ul>;
};
