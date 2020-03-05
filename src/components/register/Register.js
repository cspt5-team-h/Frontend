import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../login/login.css";

const Register = () => {
  const history = useHistory();
  const [error, setError] = useState("");
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
    axios
      .post("https://lambda-mud-test.herokuapp.com/api/registration/", {
        username: formState.username,
        password1: formState.password,
        password2: formState.password
      })
      .then(res => {
        localStorage.setItem("token", res.data.key);
        history.push("/play");
      })
      .catch(res =>
        setError(
          (res.response.data.username && res.response.data.username[0]) ||
            (res.response.data.password1 && res.response.data.password1[0]) ||
            (res.response.data.password2 && res.response.data.password2[0])
        )
      );
  };

  return (
    <div className="auth_form--container">
      <h1 className="auth_form--heading">Register</h1>
      {error && <p className="auth_form--errors">{error}</p>}
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
