import React from "react";
import "./Sign.css"

export default function Login() {
  return (
    <div className="login">
      <h1>log in</h1>
      <form>
        <div className="form-unit">
          <label>email</label>
          <input type="email" placeholder="email" required min="6"/>
        </div>
        <div className="form-unit">
          <label>password</label>
          <input type="password" placeholder="password" required min="6"/>
        </div>
        <hr />
        <button>login</button>
      </form>
    </div>
  );
}
