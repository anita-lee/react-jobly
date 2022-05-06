import React, { useState, useContext } from "react";
import UserContext from "../userContext";
import CompanyList from "../Company/CompanyList";

/** Login Form
 *
 * Props:
 * - login(function)
 * -
 *
 * State:
 * -Form Data
 *
 * JoblyApp -> Login
 */

function Login({ login }) {

  const user = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  function handleSubmit(evt) {
    evt.preventDefault();
    login({ ...formData });
    setFormData(data => ({ username: "", password: "" }));
  }

  if (user) return <CompanyList />

  return (

    <div>
      <form className="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Login-username">Username</label>
          <input
            className="form-control m-2"
            id="Login-username"
            onChange={handleChange}
            name="username"
            value={formData.username}
            autoComplete={"true"}
          />
        </div>
        <div>
          <label htmlFor="Login-password">Password</label>
          <input
            type={"password"}
            className="form-control m-2"
            id="Login-password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            autoComplete={"true"}
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}


export default Login;