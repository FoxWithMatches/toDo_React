import React from "react";
import { ToDoNotesItem } from "./todo-notes-item";

export const NotesList = ({todos}) => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="notes-item">
                <ToDoNotesItem {...itemProps} />
              <button className="delete">
                <img
                  className="delete-img"
                  src="./img/Union.svg"
                  alt="delete button"
                ></img>
              </button>
            </li>
        );
      });

      return (
        <ul className="all-lists">
          {elements}
        </ul>
      );
}