import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [data, setData] = useState({});
  const { name, password } = data;

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);

    if (name === "admin" && password === "123") {
      setUser(true);
      navigate("/dashboard");
    } else {
      alert("Unsuccessful");
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
