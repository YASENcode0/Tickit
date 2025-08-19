import React from "react";
import "./Todo.css";

export default function Todo({ title, content }) {
  console.log(title,content)
  return (
    <div className="todo">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
