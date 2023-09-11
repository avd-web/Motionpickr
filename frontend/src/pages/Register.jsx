import React from "react";
import { useState } from "react";
import "../styles/registerSheet.css";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    secondpassword: "",
  });

  const handleName = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handlePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleSecondPassword = (e) => {
    setUser({
      ...user,
      secondpassword: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Regex for certain password requirements needs to be implemented
    user.password === user.secondpassword
      ? console.log("succes")
      : alert("passwords dont match!");

    console.log(user);

    setUser({
      name: "",
      password: "",
      secondpassword: "",
    });
  };

  return (
    <div className="login-container">
      <h1 id="login-header"> Sign in </h1>
      <div className="login-container2">
        <form onSubmit={handleSubmit}>
          <div className="login-input name">
            <label htmlFor="username-input" value={user.name} id="label-name">
              Your name:
            </label>
            <input
              type="text"
              id="usename-input"
              onChange={handleName}
              value={user.name}
            />
          </div>
          <div className="login-input password">
            <label htmlFor="password-input" id="label-password"> Your Password: </label>
            <input
              type="password"
              id="password-input"
              value={user.password}
              onChange={handlePassword}
            />
          </div>
          <div className="login-input passwordcheck">
            <label htmlFor="second-password-input" id="label-check"> Re-enter password: </label>
            <input
              type="password"
              id="second-password-input"
              value={user.secondpassword}
              onChange={handleSecondPassword}
            />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
