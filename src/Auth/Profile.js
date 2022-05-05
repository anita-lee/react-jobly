import React, { useState, useContext } from "react";
import UserContext from "../userContext";

/** Profile Form
 *
 * Props:
 * -update (function)
 *
 * State:
 * -Form Data
 *
 * JoblyApp -> Profile
 */

function Profile({ update }) {

  const username = useContext(UserContext);

  const defaultValues = {
    username: username,
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
    const updatedData = { ...formData };
    delete updatedData.username;
    update({ ...updatedData });
    setFormData(data => (defaultValues));
  }

  const formFields = Object.keys(defaultValues);
  const formNames = {
    username: "Username",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email"
  };

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        {formFields.map((field, i) => {
          return (
            <div key={field}>
              <label htmlFor={`Register-${field}`}>{formNames[field]}</label>
              <input
                className="form-control m-2"
                id={`Register-${field}`}
                onChange={handleChange}
                name={field}
                value={formData[field]}
                autoComplete={"true"}
                disabled={field === "username" ? true : false}
              />
            </div>);
        })}
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
}


export default Profile;