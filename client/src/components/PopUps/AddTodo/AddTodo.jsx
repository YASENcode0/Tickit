import React, { useState } from "react";
import "./AddTodo.css";
import { usePopup } from "../../../contexts/PopupContext";
import useTodo from "../../../hooks/useTodo";
import Todo from "../../../Classes/Todo";
// add todo by category logic**
export default function AddTodo() {
  const { isOpen, openPopup, closePopup } = usePopup();
  const newTodo = useTodo();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function clearAll() {
    setTitle("");
    setContent("");
  }

  return isOpen ? (
    <div className="add-todo">
      <div className="add-todo-box">
        <div className="close-btn">
          <button
            onClick={() => {
              closePopup();
              clearAll();
            }}
          >
            x
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            newTodo.addTodo(new Todo(title, content), "play");
            closePopup();
            clearAll();
          }}
        >
          <h1>add new todo</h1>
          <div className="input-div">
            <label>title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="input-div textarea-div">
            <label>content</label>
            <textarea
              name=""
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="add-cancel-btn">
            <button
              type="button"
              onClick={() => {
                clearAll();
                closePopup();
              }}
            >
              cancel
            </button>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
}
