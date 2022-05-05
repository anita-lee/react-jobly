import React, {useState, useEffect, useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./common/RouteList";
import Nav from "./common/Nav";
import UserContext from "./userContext";
import JoblyApi from "./utilities/api";
import jwt_decode from "jwt-decode";

function JoblyApp() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  //api call for token
  async function login(formData){
    const loginToken = await JoblyApi.login(formData);
    setToken(loginToken);
  };

  //api call for token
  async function register(formData){
    const registerToken = await JoblyApi.register(formData);
    setToken(registerToken);
  };

  function decodeToken(token) {
    const decode = jwt_decode(token);
    console.log("DECODE", decode);
  }

  useEffect(function(){
    if(token){
      async function getUserName () {
        const decodedToken = decodeToken(token);
        console.log("DECODED TOKEN", decodedToken)
      }
    }
  }, [token])


  return (
    <UserContext.Provider value={ user?.username || null }>
      <BrowserRouter>
        <Nav />
        <div style={{ height: "50vh" }}
          className="container d-flex" >
          <RouteList register={register} login={login}/>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}


export default JoblyApp;

// //UserContext

// //State
//   -set user

// //UseEffect
//   -authenticate user
//   -api call for user info

// //functions
//   -login user
//   -register user
//   -logout user
//   -patch user

// Login/Register: JWT api call - authentication to gain access
// Use JWT token to get user object via api call with username ()
// Store in Context : current user object
// useState: setUser (initial state: {null}), setToken / context provider
// refresh page/logout - useEffect with token as dependency.

