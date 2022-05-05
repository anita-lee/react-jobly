import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./common/RouteList";
import Nav from "./common/Nav";
import UserContext from "./userContext";
import JoblyApi from "./utilities/api";

function JoblyApp() {

  const defualtUser = {
    username: null,
    token: null}


  const [user, setUser] = useState(defualtUser);










  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Nav />
        <div style={{ height: "50vh" }}
          className="container d-flex" >
          <RouteList />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default JoblyApp;

//UserContext

//State
  -set user

//UseEffect
  -authenticate user
  -api call for user info

//functions
  -login user
  -register user
  -logout user
  -patch user
