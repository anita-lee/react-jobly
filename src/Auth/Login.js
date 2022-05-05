import React, { useState } from "react";

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

function Login ( { login }) {
  const [formData, setFormData] = useState({
    username:"",
    password:"",
  })

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
    login({...formData});
    setFormData(data => ({username:"", password:""}));
  }

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="Login-username">Username</label>
            <input
                className="form-control"
                id="Login-username"
                onChange={handleChange}
                name="username"
                value={formData.username}
            />
        </div>
        <div>
            <label htmlFor="Login-password">Password</label>
            <input
                className="form-control"
                id="Login-password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
        </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}


export default Login;