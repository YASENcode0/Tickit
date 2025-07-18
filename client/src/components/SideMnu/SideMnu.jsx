import React, { useState } from "react";
import "./SideMnu.css";
import logo from "../../assets/logos/icon.png";

import { IoIosHome } from "react-icons/io";
import { MdCloseFullscreen } from "react-icons/md";

export default function SideMnu() {
  const [open, setOpen] = useState(false);

  function ofOn() {
    setOpen(!open);
  }

  return (
    <div className={`side-mnu ${open && "side-mnu-close"}`}>
      <div className="logo-div">
        <img src={logo} alt="logo" />
        <button onClick={ofOn}>
          <MdCloseFullscreen />
        </button>
      </div>
      <ul>
        <li>
          <span>
            <IoIosHome />
          </span>
          <h3>home</h3>
        </li>
        <li>
          <span>i</span>
          <h3>home</h3>
        </li>
        <li>
          <span>i</span>
          <h3>home</h3>
        </li>
        <li>
          <span>i</span>
          <h3>home</h3>
        </li>
      </ul>

      <div className="sign-button">
        <button>login</button>
      </div>
    </div>
  );
}
