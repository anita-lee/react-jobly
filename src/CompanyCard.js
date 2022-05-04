import React from "react";
import { Link } from "react-router-dom";

/** Component to render a company card.
 *
 * Props: company
 * State: none
 * Routes -> CompanyList -> CompanyCard
*/

function CompanyCard({ company }) {
  console.log(company.logoUrl);
  return (
    <Link to={`/companies/${company.handle}`}>
      <div>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        {company.logoUrl ?
          <img src={company.logoUrl} alt={`${company.name}`}></img>
          :
          null}
      </div>
    </Link>
  );
}

export default CompanyCard;