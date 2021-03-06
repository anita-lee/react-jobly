import React from "react";
import JobCard from "./JobCard";

/** Renders a Job card list.
 *
 * Props - jobs [{id, title, salary, equity}, ...]
 *
 * State - none
 */

function JobCardList({ jobs }) {
  return (
    <div className="d-flex justify-content-center row">
      {jobs.map(job => <JobCard job={job} key={job.id} />)}
    </div>
  )
}

export default JobCardList