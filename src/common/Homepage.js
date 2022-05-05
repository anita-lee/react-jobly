import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";

/** Renders Jobly Homepage.
 *
 * Props: none
 * State: none
 */
function Homepage() {

  const username = useContext(UserContext);

  const loginLogout = (
    <div className="row" style={{ width: "15%" }}>
      <Link className="btn btn-primary mx-1 btn-sm mb-2" to={`/login`}>Login</Link>
      <Link className="btn btn-primary mx-1 btn-sm " to={`/register`}>Sign Up</Link>
    </div>);

  const welcomeUser = (
    <h3 className="text-center">Welcome back, {username}!</h3>
  );

  return (
    <div style={{ width: "100vw" }} className="row d-flex align-items-center justify-content-center">
      <div className="col-12 text-center">
        <h1>Jobly</h1>
        <p className="mt-3 lead display-10">All the jobs in one, convenient place.</p>
      </div>
      {!username
        ?
        loginLogout
        :
        welcomeUser}
    </div>
  );
}

export default Homepage;