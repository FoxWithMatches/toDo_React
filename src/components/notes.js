import React from "react";
import { NotesList } from "./todo-notes";
import { Input } from "./notes-input";
import { BtnAddNotes } from "./btn-notes";

export const Notes = () => {
    const notesData = [
        {label: "Молоко", important: false, id: 1},
        {label: "Хлеб", important: false, id: 2},
        {label: "Сок", important: false, id: 3},
      ]
  
return (
    <div className="notes">
    <h2 className="h2">Общие</h2>
    <NotesList todos={notesData}/>

    <Input />
    <BtnAddNotes />
  </div>
);
};
