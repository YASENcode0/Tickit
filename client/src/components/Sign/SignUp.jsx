import React, { useState } from "react";
import "./Sign.css";

export default function SignUp() {
  const [formData, setFormData] = useState();
  const [inputErrs, setInputErrs] = useState({});

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function signUp(e) {
    e.preventDefault();
    inputsRequiredValidate(formData, ["email", "password", "rePassword"]);
  }

  function inputsRequiredValidate(inputs, ...name) {

    // if (!input) {
    //   setInputErrs({ ...inputErrs, [name]: `${name} is required` });
    // }
  }

  return (
    <div className="sign-up">
      <h1>Create Account</h1>
      <form>
        <div className="form-unit">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData?.email}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <span>{inputErrs?.email}</span>
        </div>
        <div className="form-unit">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={formData?.password}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <span>{inputErrs?.password}</span>
        </div>
        <div className="form-unit">
          <label>re Password</label>
          <input
            type="password"
            name="rePassword"
            value={formData?.rePassword}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <span>{inputErrs?.rePassword}</span>
        </div>
        <hr />
        <button onClick={signUp}>crate</button>
      </form>
    </div>
  );
}
