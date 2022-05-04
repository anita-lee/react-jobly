import React from "react";

/** Renders a Job card.
 *
 * Props - job {id, title, salary, equity}
 *
 * State - none
 */

function JobCard({ job }) {
  return (
    <div>
      <h4>{job.title}</h4>
      <br />
      {job.salary && <p>Salary: {job.salary}</p>}
      {job.equity && <p>Equity: {job.equity}</p>}
    </div>
  );
}

export default JobCard;