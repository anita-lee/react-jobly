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

    <div className="row w-100">
      <div className="col-12">
      <h3 className="text-white mt-3">Log In</h3>
      <form  className="bg-white p-3 w-50 h-25 rounded" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Login-username">Username</label>
          <input
            className="form-control mb-1"
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
            className="form-control mb-2"
            id="Login-password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            autoComplete={"true"}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  );
}


export default Login;