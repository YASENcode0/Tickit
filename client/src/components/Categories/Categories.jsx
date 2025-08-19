import React, { useEffect, useState } from "react";
import "./Categories.css";
import Todo from "../Todo/Todo";
import useTodo from "../../hooks/useTodo";

export default function Categories({ todosCategories, CategoryName }) {
  console.log(todosCategories, CategoryName);

  const AllTodos = useTodo();
  const [todos, setTodos] = useState(() => AllTodos.getAll());
  // err -> fix rw re render bug

  return (
    <div className="categories">
      <h4>{CategoryName}</h4>
      <div className="categories-box">
        {todosCategories?.map((todo, i) => (
          <Todo title={todo.title} content={todo.content} key={i} />
        ))}
      </div>
    </div>
  );
}
