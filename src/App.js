import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./feature/userSlice";
import WelcomeScreen from ".//Screens/WelcomeScreen";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { authentication } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        //logged in
        dispatch(login({ uid: user.uid, email: user.email }));
      } else {
        // logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <WelcomeScreen />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
