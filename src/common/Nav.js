import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../userContext";
import "../JoblyApp.css"

/** Renders Navigation bar.
 *
 * Props: logout function
 * State: none
 */

function Nav({ logout }) {

  const user = useContext(UserContext);

  const loggedIn = (
    <ul className="navbar-nav ms-5 me-2 ms-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/companies" end>
          Companies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/jobs" end>
          Jobs
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile" end>
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/" onClick={logout} end>
          Log out {user?.username}
        </NavLink>
      </li>
    </ul>);

  const loggedOut = (
    <ul className="navbar-nav ms-5 me-2 ms-auto">
      <li className="nav-item">
        <NavLink className="nav-link " to="/login" end>
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register" end>
          Sign Up
        </NavLink>
      </li>
    </ul>);


  return (
    <nav className="navbar navbar-expand-sm">
      <NavLink className="navbar-brand nav-link my-3 mx-3" to="/" end>
        Jobly
      </NavLink>
      {!user?.username
        ?
        loggedOut
        :
        loggedIn}
    </nav>
  );
}

export default Nav;