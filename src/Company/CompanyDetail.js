import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "../Job/JobCardList";
import JoblyApi from "../utilities/api";

/** Company Detail Component
 *
 *
 */
function CompanyDetail() {
  const [company, setCompany] = useState(null);
  const params = useParams();

  //Call API to get one company on mount
  useEffect(function () {
    (async function getCompany() {
      const response = await JoblyApi.getCompany(params.handle);
      setCompany({ ...response });
    })();
  }, []);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h2>{company.name}</h2>
      <h3>{company.description}</h3>
      <JobCardList jobs={company.jobs} />
    </div>
  );
}

export default CompanyDetail;