import React from "react";
import "./Categories.css";
import Todo from "../Todo/Todo";

export default function Categories({todosCategories}) {
   console.log(todosCategories.all[0].CategoriesName)

   return (
      <div className="categories">
         <p>{todosCategories.all[0].CategoriesName}</p>
         <Todo />
      </div>
   );
}
