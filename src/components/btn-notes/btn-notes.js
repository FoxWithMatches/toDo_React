import React, { Component } from "react";
import "./btn-notes.css";

export class BtnAddNotes extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onItemAdded("Hello World!")}
        className="btn-notes"
      >
        Добавить заметку
      </button>
    );
  }
}
