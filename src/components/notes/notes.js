import React, { Component } from "react";
import NotesList from "../todo-notes";
import Input from "../notes-input";
import BtnAddNotes from "../btn-notes";
import Header from "../header";
import "./notes.css";

export default class Notes extends Component {

  maxId = 100;

  state = {
    notesData: [
      { label: "Молоко", important: false, id: 1 },
      { label: "Хлеб", important: false, id: 2 },
      { label: "Сок", important: false, id: 3 },
      { label: "Wine", important: false, id: 4 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ notesData }) => {
      const idx = notesData.findIndex((el) => el.id === id);

      const newArr = [
        ...notesData.slice(0, idx), 
        ...notesData.slice(idx + 1)
      ];

      return {
        notesData: newArr
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({notesData}) => {
      const newArr = [
        ...notesData,
        newItem
      ]

      return {
        notesData: newArr
      }
    })
  }

  render() {
    return (
      <div className="notes">
        <Header title={"Общие"} />
        <NotesList todos={this.state.notesData} onDeleted={this.deleteItem} />
        <Input placeholder={"Новая заметка"} />
        <BtnAddNotes 
        onItemAdded={this.addItem}/>
      </div>
    );
  }
}
