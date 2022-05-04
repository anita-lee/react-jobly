import React from "react";

function JobCard({job}) {
  return (
    <div>
      <h4>{job.title}</h4>
      <br />
      {job.salary && <p>Salary: {job.salary}</p>}
      {job.equity && <p>Equity: {job.equity}</p>}
    </div>
  )
}

export default JobCard;