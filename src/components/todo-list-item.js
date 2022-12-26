import React from "react";

export const ToDoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "white",
  };
  return <span style={style}>{label}</span>;
};
