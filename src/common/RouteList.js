import React, { useContext } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "../Company/CompanyList";
import JobList from "../Job/JobList";
import CompanyDetail from "../Company/CompanyDetail";
import Profile from "../Auth/Profile";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import UserContext from "../userContext";

/** List of Routes.
 *
 * Props: login, register, update
 * State: none
 */

function RouteList({ login, register, update }) {
  const user = useContext(UserContext);

  const protectedRoutes = (
    <>
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
        path="/profile"
        element={<Profile update={update} />}
      />
    </>
  );

  return (
    <Routes>

      <Route
        path="/"
        element={<Homepage />}
      />

      <Route
        path="/login"
        element={<Login login={login} />}
      />

      <Route
        path="/register"
        element={<Register register={register} />}
      />

      {localStorage.token && protectedRoutes}

      <Route
        path="/*"
        element={<Navigate to="/" />}
      />

    </Routes>
  );
}

export default RouteList;

