import React from "react";
import NotesList from "../todo-notes";
import Input from "../notes-input";
import BtnAddNotes from "../btn-notes";
import Header from "../header";
import "./notes.css";

export const Notes = () => {
 const NotesData = [
    { label: "Молоко", important: false, id: 1 },
    { label: "Хлеб", important: false, id: 2 },
    { label: "Сок", important: false, id: 3 },
    { label: "Wine", important: false, id: 4 },
  ];

  return (
    <div className="notes">
      <Header title={"Общие"}/>
      <NotesList todos={NotesData} 
      onDeleted={(id) => console.log('del', id)}/>
      <Input placeholder={"Новая заметка"}/>
      <BtnAddNotes />
    </div>
  );
};
