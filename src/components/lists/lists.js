import React, { Component } from "react";
import TodoList from "../todo-list";
import Header from "../header";
import "./lists.css";
import BtnAddNotes from "../btn-notes";

export class Lists extends Component {
  maxId = 100;

  state = {
    listData: [{ label: "Общие", important: false, id: 1 }],
  };

  addList = (text) => {
    const newList = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ listData }) => {
      const newArr = [...listData, newList];

      return {
        listData: newArr,
      };
    });
  };

  render() {
    return (
      <div className="lists">
        <Header title={"Заметки"} />
        <div className="all-lists">
          <TodoList todos={this.state.listData} />
        </div>
        <BtnAddNotes onItemAdded={this.addList} />
      </div>
    );
  }
}
