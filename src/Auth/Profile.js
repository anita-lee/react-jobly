import React, { useState, useContext, useEffect } from "react";
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

function Profile({ update, error, updateError }) {

  const user = useContext(UserContext);

  const defaultValues = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  const [formData, setFormData] = useState(defaultValues);
  const [message, setMessage] = useState(null);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Submit form: call function from parent & clear inputs. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedData = { ...formData };
    delete updatedData.username;
      await update({ ...updatedData });
      setMessage({ message: "Update Successful!", type: "success" });
  }

  const formFields = Object.keys(defaultValues);
  const formNames = {
    username: "Username",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email"
  };


  return (
    <div className="row d-flex justify-content-center w-100 h-25 mt-5">
      <div className="col-12 w-50">
        <h3 className="text-white mt-3">Profile</h3>
        <form className="bg-white p-3 rounded" onSubmit={handleSubmit}>
          {formFields.map(field => {
            return (
              <div key={field}>
                <label htmlFor={`Register-${field}`}>{formNames[field]}</label>
                <input
                  className="form-control mb-2"
                  id={`Register-${field}`}
                  onChange={handleChange}
                  name={field}
                  value={formData[field]}
                  autoComplete={"true"}
                  disabled={field === "username"}
                />
              </div>);
          })}
          {message && <div className={`alert alert-${message.type}`} role="alert">{message.message}</div>}
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default Profile;