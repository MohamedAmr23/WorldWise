import React, { Fragment, useState } from "react";
import logo from "../../assets/logo.png";
import login from "./login.module.css";
import { Link } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebaseConfig.js";
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
  styleLink,
} = login;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    setErrorMessage("");
    alert("login successfully");
  };
  // sign with google
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      // You can redirect the user to another page or update the UI accordingly
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
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
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <button className={btn}>Sign in</button>
            <div className={lineContainer}>
              <div className={line}></div>
              <p className={or}>or</p>
              <div className={line}></div>
            </div>
            <button className={btn} onClick={handleGoogleSignIn}>
              Sign in with google
            </button>
            <p className={noAccount}>
              If you don't have an account, please
              <Link className={styleLink} to="/sign-up"> SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
