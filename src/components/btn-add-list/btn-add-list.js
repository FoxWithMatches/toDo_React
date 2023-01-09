import React from "react";
import "./btn-add-lists.css"

export const BtnAddList = () => {
  return (
    <button className="btn-list">
      <i className="fa-solid fa-plus svg-add"></i>
      <p>Добавить список</p>
    </button>
  );
};
