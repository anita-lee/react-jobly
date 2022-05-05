import React, { useState } from "react";

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

function Register({ register }) {

  const defaultValues = { username: "", password: "", firstName: "", lastName: "", email: "" };

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

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        {formFields.map(field => {
          return <div key={field}>
            <label htmlFor={`Register-${field}`}>{field}</label>
            <input
              className="form-control"
              id={`Register-${field}`}
              onChange={handleChange}
              name={field}
              value={formData[field]}
            />
          </div>
        })}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}


export default Register;