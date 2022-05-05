import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../userContext";

/** Renders Navigation bar.
 *
 * Props: logout function
 * State: none
 */

function Nav({ logout }) {

  const username = useContext(UserContext);

  const loggedIn = (
    <ul className="navbar-nav mx-5">
      <li>
        <NavLink className="nav-link active align-text-end" to="/companies" end>
          Companies
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link active" to="/jobs" end>
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link active" to="/profile" end>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link active " to="/" onClick={logout} end>
          Log out {username}
        </NavLink>
      </li>
    </ul>);

  const loggedOut = (
    <ul className="navbar-nav mx-5">
      <li>
        <NavLink className="nav-link active align-text-end" to="/login" end>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link active" to="/register" end>
          Sign Up
        </NavLink>
      </li>
    </ul>);


  return (
    <nav className="navbar">
      <NavLink className="navbar-brand nav-link active my-3 mx-3" to="/" end>
        Jobly
      </NavLink>
      {!username
        ?
        loggedOut
        :
        loggedIn}
    </nav>
  );
}

export default Nav;