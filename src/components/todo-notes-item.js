import React from "react";

export const ToDoNotesItem = ({label, important = false}) => {
    const style = {
        color: important ? "tomato" : "white"
    }
    return <span style={style}>{label}</span>
};