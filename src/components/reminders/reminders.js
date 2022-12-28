import React from "react";
import Lists from "../lists";
import Notes from "../notes";
import "./reminders.css"

export const Reminders = () => {
  return (
    <div className="reminders">
      <Lists />
      <Notes />
    </div>
  );
};
