import React, { useState } from "react";
import "./Sign.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [inputErrs, setInputErrs] = useState({});

  function inputsLengthValidate(field, length) {
    console.log(field);

    if (field.target.value.length < length) {
      setInputErrs({
        ...inputErrs,
        [field.target.name]: `min length ${length} deg`,
      });
    } else {
      setInputErrs({ ...inputErrs, [field.target.name]: "" });
    }
  }

  function inputsRequiredValidate(input, name) {
    if (!input) {
      setInputErrs({ ...inputErrs, [name]: `${name} is required` });
    }
  }

  function login(e) {
    e.preventDefault();
    inputsRequiredValidate(email, "email");
    inputsRequiredValidate(password, "password");
  }

  return (
    <div className="login">
      <h1>log in</h1>
      <form>
        <div className="form-unit">
          <label>email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              inputsLengthValidate(e, 5);
            }}
            value={email}
          />
          <span>{inputErrs?.email}</span>
        </div>
        <div className="form-unit">
          <label>password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              inputsLengthValidate(e, 10);
            }}
            value={password}
          />
          <span>{inputErrs?.password}</span>
        </div>
        <hr />
        <button
          onClick={(e) => {
            login(e);
          }}
        >
          login
        </button>
      </form>
    </div>
  );
}
