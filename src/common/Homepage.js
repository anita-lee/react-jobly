import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext";

/** Renders Jobly Homepage.
 *
 * Props: none
 * State: none
 */
function Homepage() {

  const user = useContext(UserContext);

  const loginLogout = (
    <div className="col-12 d-flex justify-content-center">
      <Link className="btn btn-primary mx-1 d-inline" to={`/login`}>Login</Link>
      <Link className="btn btn-primary mx-1 d-inline" to={`/register`}>Sign Up</Link>
    </div>);

  const welcomeUser = (
    <h3 className="text-light text-center">Welcome back, {user?.username}!</h3>
  );

  return (
    <div className="row d-flex align-items-center w-100 justify-content-center">
      <div className="col-12 text-center text-light">
        <h1>Jobly</h1>
        <p className="mt-3 lead">All the jobs in one, convenient place.</p>
      </div>
      {!user?.username
        ?
        loginLogout
        :
        welcomeUser}
    </div>
  );
}

export default Homepage;