import React, { Component } from "react";
import "./btn-notes.css";
import "./notes-input.css";

export class BtnAddNotes extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="notes-input"
          placeholder="..."
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button className="btn-notes">Добавить</button>
      </form>
    );
  }
}
