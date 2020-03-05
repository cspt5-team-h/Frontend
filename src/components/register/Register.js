import React, { useState } from "react";
import "../login/login.css";

const Register = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="auth_form--container">
      <h1 className="auth_form--heading">Register</h1>
      <form className="auth_form" onSubmit={onSubmit}>
        <input
          placeholder="Username"
          name="username"
          className="auth_form--input"
          value={formState.username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="auth_form--input"
          value={formState.password}
          onChange={handleChanges}
        />

        <button className="auth_form--button">Register</button>
      </form>
    </div>
  );
};

export default Register;
