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
  const [category, setCategory] = useState("all");

  const [myCategories, setMyCategories] = useState(() => getAllMyCategories());

  function clearAll() {
    setTitle("");
    setContent("");
  }
  function getAllMyCategories() {
    const categories = Object.entries(
      JSON.parse(localStorage.getItem("allTodosCategories")) || []
    );
    console.log(category);
    const myCategories = categories?.map((a) => {
      return a[0];
    });

    return myCategories;
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
            console.log(category);
            e.preventDefault();
            newTodo.addTodo(new Todo(title, content), category);
            closePopup();
            clearAll();
          }}
        >
          <h1>add new todo</h1>
          <div className="add-todo-popup-top">
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
            <div>
              <label for="categories">Choose a category</label>
              <select
                name="my categories"
                id="categories"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {myCategories?.map((option, i) => (
                  <option value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
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
