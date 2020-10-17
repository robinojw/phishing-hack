import React, { useState } from "react";
import logo from "./assets/github-logo.svg";
import "./App.css";
import { FormGroup } from "reactstrap";
import Pwned from "./pwned";

function Home() {
  const [email, setUser] = useState("");
  const [password, setPass] = useState("");
  const [clicked, setClicked] = useState("");

  if(clicked) {
    return <Pwned email={email} password={password} clicked={clicked}></Pwned>
  } else {
    return (
      <div className="Container">
        <div className="App">
          <div className="container-icon">
            <img className="icon" src={logo} />
          </div>
          <h1 className="title">Sign in to GitHub</h1>
          <form className="login-form">
            <FormGroup>
              <label className="label">Username or email address</label>
              <input
                className="input"
                type="email"
                value={email}
                onChange={e => setUser(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label className="label">Password</label>
              <label className="forgot">Forgot password?</label>
              <input
                className="input"
                type="password"
                value={password}
                onChange={e => setPass(e.target.value)}
              />
            </FormGroup>
            <button onClick={e => setClicked(true)} className="signin">
              Sign in
            </button>
          </form>
          <div className="create-container">
            <p className="create-account">
              New to GitHub? <a className="createlink">Create an account.</a>
            </p>
          </div>

          <ul className="links">
            <li className="item">Terms</li>
            <li className="item">Privacy</li>
            <li className="item">Security</li>
            <li className="contact">Contact GitHub</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
