import { useEffect, useState } from "react";

export default function useTodo() {
  const [todos, setTodos] = useState(() => getAllTodosFromApi());

  useEffect(() => {
    localStorage.setItem("allTodosCategories", JSON.stringify(todos));
  }, [todos]);

  function getAll() {
    return todos;
  }
  function addTodo(newTodo, category) {
    // setTodos((pre) => [...pre, newTodo]);
    setTodos((pre) => ({
      ...pre,
      [category || 0]: [...(pre[category] || []), newTodo],
    }));
  }
  function updateTodo(id, updatedTodo) {
    setTodos((pre) => pre.map((todo) => (todo.id === id ? updatedTodo : todo)));
  }
  function deleteTodo(id) {
    setTodos((pre) => pre.filter((todo) => todo.id !== id));
  }
  function addCategory(category) {
    setTodos((pre) => ({ ...pre, [category]: [] }));
    console.log(todos);
  }

  return { getAll, addTodo, updateTodo, deleteTodo, addCategory };
}

function getAllTodosFromApi() {
  const todos = localStorage.getItem("allTodosCategories");
  return JSON.parse(todos) || [];
}
