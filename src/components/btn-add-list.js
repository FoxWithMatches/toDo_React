import React from "react";
import "./btn-add-lists.css"

export const BtnAddList = () => {
  return (
    <button className="btn-list">
      <img className="svg-add" src="./img/Union.svg" alt="add lists"></img>
      <p>Добавить список</p>
    </button>
  );
};
