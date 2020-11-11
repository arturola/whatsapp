import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("user is", authUser);

  //     if (authUser) {
  //       // The user is logged in
  //       dispatch({
  //         type: actionTypes.SET_USER,
  //         user: authUser.uid,
  //       });
  //       // dispatch({
  //       //   type: actionTypes.SET_PHOTO,
  //       //   photo: authUser.photoURL,
  //       // });
  //     } else {
  //       // The user is logged out
  //     }
  //   });
  // }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
