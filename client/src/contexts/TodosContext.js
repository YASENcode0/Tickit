import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export function TodosState({ children }) {
  const [todos, setTodos] = useState(() => getAllTodosFromApi());

  function getAllTodosFromApi() {
    const todos = localStorage.getItem("allTodosCategories");
    return JSON.parse(todos) || { all: [] };
  }

  return (
    <PopupContext.Provider value={{ todos, setTodos }}>
      {children}
    </PopupContext.Provider>
  );
}

export function useTodos() {
  return useContext(PopupContext);
}
