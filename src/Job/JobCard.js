import React from "react";

/** Renders a Job card.
 *
 * Props - job {id, title, salary, equity}
 *
 * State - none
 */

function JobCard({ job }) {
  return (
    <div className="col-12 mb-4 bg-white border border-solid p-3 w-75 rounded">
      <h6>{job.title}</h6>
      <br />
      {job.salary && <p className="lead"><small>Salary:&nbsp;{job.salary}</small></p>}
      {job.equity && <p className="lead"><small>Equity:&nbsp;{job.equity}</small></p>}
    </div>
  );
}

export default JobCard;