import React from "react";

/** Renders a Job card.
 *
 * Props - job {id, title, salary, equity}
 *
 * State - none
 */

function JobCard({ job }) {
  return (
    <div className="col-12 my-4 border border-solid p-4">
      <h5>{job.title}</h5>
      <br />
      {job.salary && <p className="lead">Salary:&nbsp;{job.salary}</p>}
      {job.equity && <p className="lead">Equity:&nbsp;{job.equity}</p>}
    </div>
  );
}

export default JobCard;