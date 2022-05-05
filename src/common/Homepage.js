import React from "react";
import { Link } from "react-router-dom";


/** Renders Jobly Homepage.
 *
 * Props: none
 * State: none
 */
function Homepage() {
  return (
    <div style={{ width: "100vw" }} className="row d-flex align-items-center justify-content-center">
      <div className="col-12 text-center">
        <h1>Jobly</h1>
        <p className="mt-3 lead display-10">All the jobs in one, convenient place.</p>
      </div>
      <div className="row">
      <Link className="btn btn-primary mx-1 btn-sm d-inline" to={`/login`}>Login</Link>
      <Link className="btn btn-primary mx-1 btn-sm d-inline" to={`/register`}>Sign Up</Link>
      </div>
    </div>
  );
}

export default Homepage;