import React, { useState, useContext } from "react";
import UserContext from "../userContext";
import CompanyList from "../Company/CompanyList";

/** Register Form
 *
 * Props:
 * - register(function)
 * -
 *
 * State:
 * -Form Data
 *
 * JoblyApp -> Register
 */

function Register({ register, error }) {

  const user = useContext(UserContext);

  const defaultValues = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  };

  const [formData, setFormData] = useState(defaultValues);

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
    register({ ...formData });
    setFormData(data => (defaultValues));
  }

  const formFields = Object.keys(defaultValues);
  const formNames = {
    username: "Username",
    password: "Password",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email"
  };


  return (
    <div className="row d-flex justify-content-center w-100 h-25 mt-5 mb-2">
      <div className="col-12 w-50">
        <h3 className="text-white my-3">Sign Up</h3>
        <form className="bg-white p-3 rounded" onSubmit={handleSubmit}>
          {formFields.map((field, i) => {
            return (
              <div key={field}>
                <label htmlFor={`Register-${field}`}>{formNames[field]}</label>
                <input
                  type={field === "password" ? field : field === "email" ? field : "text"}
                  className="form-control mb-2"
                  id={`Register-${field}`}
                  onChange={handleChange}
                  name={field}
                  value={formData[field]}
                  autoComplete={"true"}
                />
              </div>);
          })}
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <button className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default Register;