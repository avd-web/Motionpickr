import React, { useState } from "react";
import "../styles/registerSheet.css";
import axios from "axios";

export default function Login({persistTokenEvent}) {


  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let authBody = { email: email, password: password };
    console.log(authBody);

    let authResp = await axios.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      authBody
    );
    console.log(persistTokenEvent);

    persistTokenEvent(authResp.data);
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
        <form className="register-labels" onSubmit={()=>{handleSubmit()}}>
          <div>
            <label htmlFor="email" id="email-label">
              Enter e-mail:
            </label>
            <input
              type="text"
              id="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
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
          </div>
        </form>
      </div>
    </div>
  );
}
