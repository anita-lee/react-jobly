import React, { useState, useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import RouteList from "./common/RouteList";
import Nav from "./common/Nav";
import UserContext from "./userContext";
import JoblyApi from "./utilities/api";
import jwt_decode from "jwt-decode";
import "./JoblyApp.css";

const TOKEN_LOCAL_KEY = "token";

/** Handles user authentication. Renders routes and navbar
 * Provider for UserContext.
 *
 * Props: none
 * State: user, token
 *
 * App -> {JoblyApp} -> Nav/Routes
 */

function JoblyApp() {

  // const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_KEY));
  const [loadingUser, setLoadingUser] = useState(false);
  const [formError, setFormError] = useState(null);

  //api call for token
  async function login(formData) {
    try {
      setLoadingUser(true);
      const loginToken = await JoblyApi.login(formData);
      setToken(loginToken);
      // navigate("/companies");
    }
    catch (err) {
      setFormError(() => err);
      setLoadingUser(false);
    }
  };

  //api call for token
  async function register(formData) {
    try {
      setLoadingUser(true);
      const registerToken = await JoblyApi.register(formData);
      setToken(registerToken);
      // navigate("/companies");
    }
    catch (err) {
      setFormError(() => err);
      setLoadingUser(false);
    }
  };

  //api call for updating formData
  async function update(formData) {
    try {
      const updatedUser = await JoblyApi.update(formData, user.username, token);
      setUser(preUser => ({ ...preUser, ...updatedUser }));
    }
    catch (err) {
      setFormError(() => err);
      setLoadingUser(false);
    }
  };

  //strip state of user and token, strip token from local Storage
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

  //update state of form error
  function updateError() {
    setFormError(null);
  }

  // decode token and setUser state and store token in local Storage,
  // depends on token state.
  useEffect(function () {
    if (token) {
      async function getUserName() {
        const username = decodeToken(token);
        const newUser = await JoblyApi.getUser(username, token);
        setUser(() => newUser);
        localStorage.setItem(TOKEN_LOCAL_KEY, token);
      };
      getUserName();
      setLoadingUser(false);
      setFormError(null);
    }
  }, [token]);

  if (loadingUser) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Nav logout={logout} />
        <div id="JoblyApp" className="container-fluid d-flex" style={{ height: "100vh" }}>
          <RouteList
            register={register}
            login={login}
            update={update}
            error={formError}
            updateError={updateError} />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default JoblyApp;
