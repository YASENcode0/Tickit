import React from "react";
import "./Main.css";
import Heder from "../Heder/Heder";
import AllCategories from "../AllCategories/AllCategories";
import { usePopup } from "../../contexts/PopupContext";

export default function Main() {
  const { isOpen, openPopup } = usePopup();

  return (
    <div className="main">
      <Heder />
      <AllCategories />
      <button className="add-todo-btn" onClick={openPopup}>
        +
      </button>
    </div>
  );
}
