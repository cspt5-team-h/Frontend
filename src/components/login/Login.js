import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link} from "react-router-dom";
import axios from "axios";
import "./login.css";
const Login = () => {
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
  // https://lambda-mud-test.herokuapp.com/api/login/
  // 
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("http://csp5.herokuapp.com/api/login/", formState)
      .then(res => {
        localStorage.setItem("token", res.data.key);
        history.push("/play");
      })
      .catch(res =>
        setError(
          (res.response.data.username && res.response.data.username[0]) ||
            (res.response.data.password1 && res.response.data.password1[0]) ||
            (res.response.data.password2 && res.response.data.password2[0]) ||
            (res.response.data.non_field_errors &&
              res.response.data.non_field_errors[0])
        )
      );
  };
  return (
    <div className="auth_form--container">
      <h1 className="auth_form--heading">Log in</h1>
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
        <button className="auth_form--button">Log in</button>
        <button className="auth_form--button"><Link  style={{textDecoration:'none', color:'white'}} to = '/register'>Register</Link></button>
      </form>
    </div>
  );
};
export default Login;
