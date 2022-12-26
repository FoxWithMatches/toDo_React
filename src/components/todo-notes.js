import React from "react";
import { ToDoNotesItem } from "./todo-notes-item";
import "./todo-notes.css"
import { BtnDeleteNotes } from "./btn-delete-notes";

export const NotesList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="notes-item">
        <ToDoNotesItem {...itemProps} />
        <BtnDeleteNotes />
      </li>
    );
  });

  return <ul className="all-lists">{elements}</ul>;
};
