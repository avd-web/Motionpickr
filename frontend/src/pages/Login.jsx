import React, { useState } from "react";
import "../styles/registerSheet.css";
import { GiMeeple } from "react-icons/gi";
import { Link } from "react-router-dom";
import NavLink from "../components/navbar/navlink/navLink";
import axios from "axios";

export default function Login() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showPassword = () => {
    setShow(!show);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let authBody = { email: email, password: password };

    //todo add /login endpoint
    let authResp = await axios.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      authBody
    );
    console.log(authResp);
    //todo add token to sessionstorage

    emptyForm();
  };
  const emptyForm = () => {
    setEmail("");
    setPassword("");
    setShow(false);
  };

  return (
    <div className="register-container">
      <h1 className="register-header"> Sign in </h1>
      <div className="label-container">
        <form className="register-labels" onSubmit={handleSubmit}>
          <label htmlFor="email" id="email-label">
            Enter e-mail:
          </label>
          <input
            type="ema"
            id="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password" id="password-label">
            Enter password:
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            required
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <button type="submit">login</button>
        </form>
        <button onClick={showPassword} id="show-button">
          {" "}
          show{" "}
        </button>
        <NavLink name={"register"} link={"/register"} />
      </div>
    </div>
  );
}
