import React, { Component } from "react";
import "./btn-add-lists.css"

export class BtnAddList extends Component  {
  render() {
    return (
      <button className="btn-list">
        <i className="fa-solid fa-plus svg-add"></i>
        <p>Добавить список</p>
      </button>
    );
  };
  }

