import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./common/RouteList";
import Nav from "./common/Nav";
import UserContext from "./UserContext";
import JoblyApi from "./utilities/api";
import jwt_decode from "jwt-decode";

const TOKEN_LOCAL_KEY = "token";

/** Hendles user authentication. Renders routes and navbar
 * Provider for UserContext.
 *
 * Props: none
 * State: user, token
 *
 * App -> {JoblyApp} -> Nav/Routes
 */

function JoblyApp() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_KEY));

  //api call for token
  async function login(formData) {
    const loginToken = await JoblyApi.login(formData);
    setToken(loginToken);
  };

  //api call for token
  async function register(formData) {
    const registerToken = await JoblyApi.register(formData);
    setToken(registerToken);
  };

  //strip state of user and token
  function logout() {
    setToken(() => null);
    setUser(() => null);
    localStorage.removeItem(TOKEN_LOCAL_KEY);
  }

  //decode token to get username
  function decodeToken(token) {
    const decode = jwt_decode(token);
    return decode.username;
  }

  // decode token and setUser state, depends on token.
  useEffect(function () {
    if (token) {
      (async function getUserName() {
        const username = decodeToken(token);
        const newUser = await JoblyApi.getUser(username, token);
        setUser(() => newUser);
        localStorage.setItem(TOKEN_LOCAL_KEY, token);
      })();
    }
  }, [token]);

  return (
    <UserContext.Provider value={user?.username|| null}>
      <BrowserRouter>
        <Nav logout={logout} />
        <div style={{ height: "50vh" }}
          className="container d-flex" >
          <RouteList register={register} login={login} />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default JoblyApp;
