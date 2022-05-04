import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <NavLink to="/" end>
        Jobly
      </NavLink>
      <NavLink to="/companies" end>
        Companies
      </NavLink>
      <NavLink to="/jobs" end>
        Jobs
      </NavLink>
    </nav>
  );
}

export default Nav;