import React from "react";
import { NotesList } from "./todo-notes";
import { Input } from "./notes-input";
import { BtnAddNotes } from "./btn-notes";
import { Header } from "./header";
import "./notes.css"

export const notesData = [
  { label: "Молоко", important: false, id: 1 },
  { label: "Хлеб", important: false, id: 2 },
  { label: "Сок", important: false, id: 3 },
];

export const Notes = () => {

  return (
    <div className="notes">
      <Header title={"Общие"}/>
      <NotesList todos={notesData} />
      <Input placeholder={"Новая заметка"}/>
      <BtnAddNotes />
    </div>
  );
};
