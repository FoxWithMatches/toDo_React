import React, { Component } from "react";
import "./btn-delete-notes.css"

export default class ToDoNotesItem extends Component {
  state = {
    done: false,
    important: false,
  };
  
  render() {
    const { label, onDeleted } = this.props;
    // const { done, important } = this.state;

    return (
      <div>
        <span>{label}</span>
        <button className="delete" onClick={onDeleted}>
          <i className="fa-solid fa-plus delete-img"></i>
        </button>
      </div>
    );
  }
}
