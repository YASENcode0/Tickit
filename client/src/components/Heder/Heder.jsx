import React from "react";
import "./Heder.css";
import { usePopup } from "../../contexts/CategoryPopupContext";

import { CiSearch } from "react-icons/ci";

export default function Heder() {
  const { openPopup } = usePopup();
  
  return (
    <div className="heder">
      <div className="heder-box1">
        <h1>web title</h1>
      </div>
      <div className="heder-box2">
        <div className="switch-btn">
          <div className="">all</div>
          <div className="switch">to do</div>
          <div className="">don</div>
        </div>
        <div className="search-box">
          <input placeholder="search..." type="search" />
          <button>
            <CiSearch />
          </button>
        </div>
        <button className="add-type-btn" onClick={openPopup}>
          + add type
        </button>
      </div>
    </div>
  );
}
