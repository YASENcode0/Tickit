import React, { useState } from "react";
import "./Sign.css";

export default function SignUp() {
  const [formData, setFormData] = useState();
  const [inputErrs, setInputErrs] = useState({});
  const [verifyOn, setVerifyOn] = useState(1);
  const [code, setCode] = useState("");

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setInputErrs({});
  }

  function signUp(e) {
    e.preventDefault();
    inputsRequiredValidate(formData, ["email", "password", "rePassword"]);
    alert("123");
    handleVerify();
  }

  function inputsRequiredValidate(inputs, ...name) {
    if (!inputs?.email) {
      setInputErrs((prev) => ({ ...prev, email: "email is required" }));
    } else if (!/\S+@\S+\.\S+/.test(inputs?.email)) {
      setInputErrs((prev) => ({ ...prev, email: "email is not valid" }));
    } else if (!inputs?.password) {
      setInputErrs((prev) => ({ ...prev, password: "password is required" }));
    } else if (!inputs?.rePassword) {
      setInputErrs((prev) => ({
        ...prev,
        rePassword: "re password is required",
      }));
    } else if (inputs?.password !== inputs.rePassword) {
      setInputErrs((prev) => ({
        ...prev,
        rePassword: "password is not match",
      }));
    }
  }

  function handleVerify(email) {
    setVerifyOn(true);
  }

  // verify form //

  function coedVerify(...e) {
    console.log(e.map((obj) => obj.value).join(""));
    console.log(
      e[0].map((i) => {
        console.log(i);
      })
    );
    // errs collect all nbumbers from the foem
  }

  // **verify form** //

  return (
    <div className="sign-up">
      <h1>Create Account</h1>
      <form onSubmit={signUp}>
        <div className="form-unit">
          <label>Email</label>
          <input
            autoFocus
            placeholder="your@example.com"
            required
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
            placeholder="1234"
            required
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
            placeholder="****"
            required
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
        <button>crate</button>
      </form>
      {verifyOn && (
        <div className="verify-window">
          <div className="form-box">
            <h2>sent code to : {formData?.email}</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                coedVerify(e.target);
                // console.log(e.target[2].value);
              }}
            >
              <div className="inputs-box">
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="1"
                  required
                  oninput="this.nextElementSibling && this.nextElementSibling.focus()"
                />
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="1"
                  required
                  oninput="this.nextElementSibling && this.nextElementSibling.focus()"
                />
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="1"
                  required
                  oninput="this.nextElementSibling && this.nextElementSibling.focus()"
                />
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxlength="1"
                  required
                />
              </div>
              <button type="submit">verify</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
