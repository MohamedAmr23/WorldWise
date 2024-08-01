import React, { Fragment, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import login from "../login/login.module.css";
const {
    container,
    box,
    formStyle,
    imgStyle,
    input,
    btn,
    or,
    lineContainer,
    line,
    noAccount,
    styleLink
  } = login;
const Signup = () => {
    const [username,setUsername]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [resetPassword,setResetPassword]=useState("")
    const [errorMessage, setErrorMessage] = useState("");
    // deal with email and pass
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 6;
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (!validateEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        return;
      }
      if (!validatePassword(password)) {
        setErrorMessage("Password must be at least 6 characters long.");
        return;
      }
      if(password!==resetPassword){
        setErrorMessage("Passwords do not match")
        return;
      }
  
      setErrorMessage("");
      alert("login successfully");
    };
  return (
    <Fragment>
      <div className={container}>
        <div className={box}>
        <Link to="/" className={imgStyle}>
          <img
            style={{width: "150px" }}
            className={imgStyle}
            src={logo}
          />
          </Link>
          <form className={formStyle} onSubmit={handleLogin}>
            <label>username</label>
            <input
              className={input}
              type="text"
              placeholder="johndoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              className={input}
              type="email"
              placeholder="mail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              className={input}
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Re-Enter your password</label>
            <input
              className={input}
              type="password"
              placeholder="Confirm Password"
              value={resetPassword}
              onChange={(e) => setResetPassword(e.target.value)}
            />
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button className={btn}>Sign Up</button>
            <div className={lineContainer}>
              <div className={line}></div>
              <p className={or}>or</p>
              <div className={line}></div>
            </div>
            <button className={btn} >
              Sign Up with google
            </button>
            <p className={noAccount}>
            If you have an account, please
              <Link className={styleLink} to="/login"> Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Signup