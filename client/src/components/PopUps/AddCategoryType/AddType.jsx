import React, { useState } from "react";
import "./AddType.css";
import { usePopup } from "../../../contexts/CategoryPopupContext";
import useTodo from "../../../hooks/useTodo";

export default function AddType() {
  const { isOpen, closePopup } = usePopup();
  const [type, setType] = useState('');
  const init = useTodo();

  if (isOpen) {
    return (
      <div className="add-type">
        <div>
          <div>
            <label>type</label>
            <input type="text" value={type} onChange={(e)=>{
                setType(e.target.value)
            }}/>
          </div>
          <button
            onClick={() => {
              closePopup();
              init.addCategory(type);
            }}
          >
            add
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
