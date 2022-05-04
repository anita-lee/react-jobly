import React, { useState, useEffect } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";

/** Component to get and render list of jobs.
 *
 * Props: none
 * State:
 * - jobs : [ { id, title, salary, equity, company }, ...]
 * - searchQuery : { name: "" }
 * Routes -> JobList -> JobCardList
 */
function JobList() {

  const [jobs, setJobs] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});

  //Call API to get all companies on mount and state of searchQuery
  useEffect(function () {
    (async function getJobs() {
      const response = await JoblyApi.request("jobs", searchQuery);
      setJobs([...response.jobs]);
    })();
  }, [searchQuery]);

  //Pass as prop to obtain search data, update state of searchQuery
  function searchJob(formData) {
    setSearchQuery({ ...formData });
  }

  return (
    <div>
      <SearchForm search={searchJob} queryName={"title"} />
      {!jobs
        ?
        <p>Loading...</p>
        :
        <JobCardList jobs={jobs} />}
    </div>
  );
}

export default JobList;