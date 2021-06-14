import React, { useState } from "react";
import "../styles/Welcome-Screen.css";
import SignIn from "../Screens/SignIn";
const WelcomeScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="welcome-Contaier">
      <div className="img-background">
        <img
          className="logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />

        <button className="sign-in" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        {/* <button className="sign-in lan">English</button> */}
        <div className="login-gradent" />

        <div className="login-body">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to watch? Enteryour email to create or restart your
                membership
              </h3>

              <div className="login-ScreenInput">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default WelcomeScreen;
