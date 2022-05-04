import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "../Company/CompanyList";
import JobList from "../Job/JobList";
import CompanyDetail from "../Company/CompanyDetail";

/** List of Routes
 *
 * Props: none
 * State: none
 */
function RouteList() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/companies"
        element={<CompanyList />}
      />

      <Route
        path="/jobs"
        element={<JobList />}
      />

      <Route
        path="/companies/:handle"
        element={<CompanyDetail />}
      />

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />

    </Routes>
  )
}

export default RouteList;

