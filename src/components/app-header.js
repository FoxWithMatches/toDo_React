import React from "react";

export const AppHeader = () => {
    return (
      <div className="reminders">
        <div className="lists">
          <h2 className="h2">Заметки</h2>
          
          <div className="all-lists">
            <button className="list-item">
              <p className="text-item">Общие</p>
              <div className="nav-arrow">
                <p></p>
                <div className="arrow"></div>
              </div>
            </button>
          </div>
        </div>

        <div className="notes">
          <h2 className="h2">Общие</h2>
          
          <ul className="all-lists">
            <li className="notes-item">Milk
              <button className="delete">
                <img className="delete-img" src="./img/Union.svg" alt="delete button"></img>
              </button>
            </li>
          </ul>

          <input className="notes-input" placeholder="Новая заметка"></input>
          <button className="btn-notes">Добавить заметку</button>
        </div>
        
        <button className="btn-list">
          <img className="svg-add" src="./img/Union.svg" alt="add lists"></img>
          <p>Добавить список</p>
        </button>
        
      </div>
    
    );
  };