import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand nav-link active my-3 mx-3" to="/" end>
        Jobly
      </NavLink>
      <ul className="navbar-nav mx-5">
        <li>
          <NavLink className="nav-link active align-text-end"to="/companies" end>
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link active" to="/jobs" end>
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;