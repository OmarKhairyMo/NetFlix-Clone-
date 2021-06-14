import React, { useState, useRef } from "react";
import { authentication } from "../firebase";
import { useDispatch } from "react-redux";
import "../styles/SignIn.css";
const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    authentication
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();
    authentication
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => console.log(user))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signin-Block">
      <div className="content">
        <h1>Sign In</h1>
        <form>
          <input ref={emailRef} type="Email" placeholder="Enter your Email" />
          <input ref={passwordRef} type="Password" placeholder="Password" />
          <button onClick={signIn}>Sign In</button>
          <h4>
            <span className="signupScreen_gray"> New to NetFlix?</span>
            <span className="signupScreen_link" onClick={register}>
              Sign UP now
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
