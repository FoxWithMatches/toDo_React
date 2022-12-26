import React from "react";
import { Lists } from "./lists";
import { Notes } from "./notes";

export const Reminders = () => {
    return (
      <div className="reminders">
        <Lists />
        <Notes />
      </div>
    );
  };