import React, { useState } from "react";
import "./AllCategories.css";
import Categories from "../Categories/Categories";
import useTodo from "../../hooks/useTodo";
import { useTodos } from "../../contexts/TodosContext";

export default function AllCategories() {
  const { todos, setTodos } = useTodos();

  return (
    <div className="all-categories">
      {Object.entries(todos).map(([category, todoList]) => {
        return (
          <Categories todosCategories={todoList} CategoryName={category} />
        );
      })}
    </div>
  );
}
