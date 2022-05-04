import React from "react";
import { Link } from "react-router-dom";

/** Component to render a company card.
 *
 * Props: company
 * State: none
 * Routes -> CompanyList -> CompanyCard
*/

function CompanyCard({ company }) {
  return (
    <div className="col-12 mb-2 d-inline">
      <Link className="text-decoration-none text-dark" to={`/companies/${company.handle}`}>
        <h6 className="d-inline">{company.name}</h6>
        {company.logoUrl
          &&
          <img style={{"max-width":"15%"}} className="float-end ms-5 img-thumbnail my-1"src={company.logoUrl} alt={`${company.name}`}></img>
        }
        <p>
          <small>{company.description}</small>
        </p>
      </Link>
    </div>
  );
}

export default CompanyCard;