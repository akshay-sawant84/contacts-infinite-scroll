import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState(null);
  const [userName, setUsername] = useState(null);

  const _onHandleSubmit = (e) => {
    e.preventDefault();
    if (userName === "foo" && password === "bar") {
      localStorage.setItem("isLoggedIn", true);
      window.location.assign("/");
    } else {
      alert("Please enter correct credentials.");
    }
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={_onHandleSubmit}>
        <h3 className = 'form_heading'>Login</h3>
        <input
          className="form-item"
          type="text"
          id="fname"
          name="fname"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-item"
          type="password"
          id="lname"
          name="lname"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="form-item" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
