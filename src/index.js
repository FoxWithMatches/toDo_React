import React from "react";
import ReactDOM from "react-dom";
import Reminders from "./components/reminders";
import "./style.css"

const App = () => {
  return (
    <div>
      <Reminders />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
