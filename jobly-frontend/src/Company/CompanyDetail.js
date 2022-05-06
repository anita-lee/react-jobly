import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "../Job/JobCardList";
import JoblyApi from "../utilities/api";

/** Company Detail Component
 *
 * state: company
 * params: handle
 *
 * CompanyList -> CompanyCard -> CompanyDetail
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const params = useParams();

  //Call API to get one company on mount
  useEffect(function () {
    async function getCompany() {
      const response = await JoblyApi.getCompany(params.handle);
      setCompany({ ...response });
    }
    getCompany();
  }, []);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="row d-flex justify-content-center">
      <h2 className="my-4 text-white text-center">{company.name}</h2>
      <p className="mb-4 text-white text-center w-75">{company.description}</p>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;