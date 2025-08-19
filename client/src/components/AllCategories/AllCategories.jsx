import React, { useState } from "react";
import "./AllCategories.css";
import Categories from "../Categories/Categories";
import useTodo from "../../hooks/useTodo";

export default function AllCategories() {
  const AllTodos = useTodo();

  const [todosCategories, setTodosCategories] = useState(
    () => AllTodos.getAll() || {}
  );

  return (
    <div className="all-categories">
      {Object.entries(todosCategories).map(([category, todoList]) => {
        return (
          <Categories todosCategories={todoList} CategoryName={category} />
        );
      })}
      {/* <Categories todosCategories={todosCategories} /> */}
    </div>
  );
}
