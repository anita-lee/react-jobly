import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../utilities/api";


/** Component to get and render list of companies.
 *
 * Props: none
 *
 * State:
 * - companies : [ { handle, name, description, numEmployees, logoUrl }, ...]
 * - seachQuery : { name: "" }
 *
 * Routes -> CompanyList -> CompanyCard
 */

function CompanyList() {

  const [companies, setCompanies] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});

  //Call API to get all companies on mount and state of searchQuery
  useEffect(function () {
    async function getCompanies() {
      const response = await JoblyApi.request("companies", searchQuery);
      setCompanies([...response.companies]);
    }
    getCompanies();
  }, [searchQuery]);

  //Pass as prop to obtain search data, update state of searchQuery
  function searchCompany(formData) {
    setSearchQuery({ ...formData });
  }

  return (
    <div>
      <SearchForm search={searchCompany} queryName={"name"} />
      {!companies
        ?
        <p>Loading...</p>
        :
        <div class="row">
          {companies.map(company =>
            <CompanyCard company={company} key={company.handle} />)}
        </div>}
    </div>
  );
}

export default CompanyList;