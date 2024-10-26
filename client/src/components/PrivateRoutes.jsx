import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isAuthorized = useSelector((state) => state.login.isAuthorized);
  if (!isAuthorized) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export default PrivateRoutes;
