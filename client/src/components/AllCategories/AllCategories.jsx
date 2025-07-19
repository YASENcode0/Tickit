import React, { useState } from "react";
import "./AllCategories.css";
import Categories from "../Categories/Categories";

export default function AllCategories() {
  const [todosCategories, setTodosCategories] = useState({
    all: [
      {
        CategoriesName: "all",
      },
      {
        title: "abc",
      },
    ],
  });

  return (
    <div className="all-categories">
      <Categories todosCategories={todosCategories} />
    </div>
  );
}
