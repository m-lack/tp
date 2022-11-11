import * as React from "react";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef} from "react";

import "./login.styles.scss";
import Dashboard from "../dashboard/dashboard.component";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernam = useRef();
  const pasword = useRef();

  const handleSubmit=()=>{
    if (usernam.current.value=="user" && pasword.current.value=="user123"){
      localStorage.setItem("usernam", "user")
      localStorage.setItem("pasword", "user123")
    }
  }

  return (
    <div className="login-container">
      <div className="logo">
        <Link className="pets" to="/">
          Pets
        </Link>
      </div>
      <div className="login-field">
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <br />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <button
          type="submit"
          onClick={ () =>{
            if (username === "user" && password === "user123"){
              window.location.href="/dashboard"
            }
            else{
              alert("ohoyahoo")
            }
          }}
        >
          Login
        </button >
      </div>
    </div>
  );
};

export default Login;
