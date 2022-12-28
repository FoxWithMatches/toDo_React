import React from "react";
import NotesList from "../todo-notes";
import Input from "../notes-input";
import BtnAddNotes from "../btn-notes";
import Header from "../header";
import "./notes.css";
import NotesData from "../notes-data";


export const Notes = () => {

  return (
    <div className="notes">
      <Header title={"Общие"}/>
      <NotesList todos={NotesData} />
      <Input placeholder={"Новая заметка"}/>
      <BtnAddNotes />
    </div>
  );
};
