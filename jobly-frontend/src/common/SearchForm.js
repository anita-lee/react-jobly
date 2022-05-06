import React, { useState } from "react";

/** Search Form
 *
 * Props:
 * -search (function)
 * -queryName
 * State:
 * -Form Data
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ search, queryName }) {
  const [formData, setFormData] = useState({
    [queryName]:"",
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
    search({ ...formData});
    setFormData(data => ({...data, [queryName]:""}));
  }

  return (
      <div className="row d-flex justify-content-center rounded my-4">
        <form className="input-group w-75" onSubmit={handleSubmit}>
            <input
                className="form-control"
                id="searchByName"
                placeholder="Enter search term.."
                onChange={handleChange}
                name={queryName}
                value={formData[queryName]}
            />
            <button className="search-button btn btn-primary">Submit</button>
        </form>
      </div>
  );
}

export default SearchForm;
